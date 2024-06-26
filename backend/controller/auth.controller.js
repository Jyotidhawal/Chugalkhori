import User from "../model/usser.model.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";


export const signup=async(req,res)=>{

    try {
        console.log("at backend of signup")
        const {fullname, username, password , confirmpassword,gender} = req.body;

        if(password!==confirmpassword){
            return res.status(400).json({error:"password not match"});
        }

        const user=await User.findOne({username});

        if(user){
            return res.status(400).json({error:"user already exist"});
        }

        // hash the password
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);

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

             generateToken(newUser._id,res);
             await newUser.save();

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
    // console.log("loginUser");
    try {

        const {username,password}=req.body;
        const user=await User.findOne({username});
        const isPasswordCorrect=await bcryptjs.compare(password,user?.password || "");

        if (!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"});
        }

        generateToken(user._id,res);

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