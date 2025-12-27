import mongoose from "mongoose";

const ConnectDB=async()=>{

   try {

     await mongoose.connect(process.env.MONGO_URL)
    console.log("I m data base and connected")

   } catch (error) {
    console.log("you face error")
    console.log(error)

   }
}

export default ConnectDB;