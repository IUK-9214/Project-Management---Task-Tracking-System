import mongoose from "mongoose"

const Tasks = mongoose.Schema({
    taskProject:{

    },
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
}, {timestamps:true}

)


const Task = mongoose.model("Tasks", Tasks);
export default Task;