import mongoose from "mongoose";

const Porject=mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

const Projects = mongoose.model("projects",Porject)

export  default Projects