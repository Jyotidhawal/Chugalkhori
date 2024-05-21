import User from "../model/user.model.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import generateToken from "../utils/generateToken.js";




export const signup=async(req,res)=>{

    console.log("at backend of signup")
    try {
        const {fullname, username, password , confirmPassword,gender} = req.body;

        if(password!==confirmPassword){
            return res.status(400).json({error:"password not match"});
        }

        const user=await User.findOne({username});

        if(user){
            return res.status(400).json({error:"user already exist"});
        }

        // hash the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const boyprofilePic='https://avatar.iran.liara.run/public/boy?username=${username}';
        const girlprofilePic='https://avatar.iran.liara.run/public/girl?username=${username}';
     
        const newUser=new User({
            fullname,
            username,
            password : hashedPassword,
            gender,
            profilePic:gender==='male' ? boyprofilePic : girlprofilePic
        });


        if(newUser){
            // generate jwt token here
            console.log("found new user")
             generateToken(newUser._id,res);
             await newUser.save();
            console.log(newUser);
            res.status(201).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                username:newUser.username,
                profilePic:newUser.profilePic,
               
                    })
        }

        else{
            res.status(400).json({error:"Invalid user data"});
        }


        
    } catch (error) {
        console.log("error in signup controller" , error.message);
        res.status(500).json({error:"Internal Server Error"});
        
    }
    // console.log('signupUser');
}


export const login=async(req,res)=>{
    console.log("at backend of loginUser");
    try {
        

        const {username,password}=req.body;
        const user=await User.findOne({username});
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "");
        console.log(username, password);
        console.log(isPasswordCorrect);
        if (!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"});
        }
        


        generateToken(user._id,res);
        console.log(`Welcome back ${username} at sign in`);
        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
            profilePic:user.profilePic,
            
            
        });
        
    } catch (error) {
        console.log("error in login controller" , error.message);
        res.status(500).json({error:"Internal Server Error"});
        
    }
}

export const logout=(req,res)=>{
    // console.log('logoutUser');

    try {
        res.cookie("jwt",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
        
    } catch (error) {

        console.log("error in logout controller" , error.message);
        res.status(500).json({error:"Internal Server Error"});
        
    }
}