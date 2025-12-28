import mongoose from "mongoose"

const Tasks = mongoose.Schema({

    taskTitle: {
        type: String,
        required: true
    },
    taskDesc: {
        type: String
    },
    taskStatus: {
        type: String,
        required:true 
    },
    taskAssign: {
        type: String
    }
}, { timeStamps: true });


const Task = mongoose.model("Tasks", Tasks);
export default Task;