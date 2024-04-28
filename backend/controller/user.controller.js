import User from '../model/usser.model.js'

export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const filteredUser = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.send(200).json(filteredUser);
        
    } catch (error) {
        console.error("Error in getUsersForSidebar" , error.message);
        res.status(500).json({error:"Internal Server Error"});
        
    }
}