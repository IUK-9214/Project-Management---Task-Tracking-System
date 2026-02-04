import mongoose from "mongoose"

const Auth= mongoose.Schema({
    Email:{
        type :String ,
         required: true,
        unique:true
    },
    FullName:{
        type:String,
         required: true
    },
    Password:{
        type:String,
         required: true,
    },
    imagePublicId:String
},{timestamps:true});

const AuthUser =mongoose.model("Auths",Auth);
export default AuthUser;