import mongoose from "mongoose"

const Users=mongoose.Schema({
    fullName:{
        type :String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true})



const AdminUsers=mongoose.model("adminUsers",Users)

export default AdminUsers;