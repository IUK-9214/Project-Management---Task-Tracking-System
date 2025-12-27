import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./database/ConnectDB.js";
import router from "./routes/projectRoutes.js";
import cors from "cors"

dotenv.config()

const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))


app.use(express.json());
ConnectDB()

app.use("/api",router)



app.get("/",(req,res)=>{
    res.json({
        message:"hello buddy i m here ",
        success :true
    })
})


app.listen(4000,()=>{
console.log("hey I m listening......")
})