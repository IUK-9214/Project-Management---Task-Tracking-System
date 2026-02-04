import jwt from "jsonwebtoken"
import AuthUser from "../modules/auth.js"

export const ProtectRouting=async(req,res,next)=>{
    try {
        const Token=req.cookies.jwt
        if (!Token){
            return res.status(401).json({
                message:"Unauthorized - No Token Provided"
            })
        }
        const decode=jwt.verify(Token,process.env.JWT_SECRET)
        if(!decode){
             return res.status(401).json({
                message:"Unauthorized - Invalid Token Provided"
            })
        }
        const user = await AuthUser.findById(decode.userId).select("-password")
if(!user){
    return res.status(401).json({
                message:"User not found "
            })
}
req.user=user
next ()
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};