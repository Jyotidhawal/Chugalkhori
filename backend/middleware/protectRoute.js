import jwt from 'jsonwebtoken';
import User from '../model/usser.model.js'

const protectRoute = async(req, res,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Not Authorized"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user = decoded.userId;
        // next();
        
        if(!decoded){
            return res.status(401).json({error:" Unauthorized-invalid token"});
        }

        const user=await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({error:"user not found"});
        }

        req.user=user;
        next();

    } catch (error) {
        console.log("error in protectRoute middleware :",error.message);
        res.status(500).json( {error:"Internal server error "});
        
    }
}

export default protectRoute;