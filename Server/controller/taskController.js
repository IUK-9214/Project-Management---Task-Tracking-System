import Task from "../modules/task.js"

export const addTask =async(req,res)=>{
    try {
        
const{ taskTitle,taskStatus}=req.body

if (!taskTitle||!taskStatus){

    return res.status(400).json({
        message:"data is missing the status and titile ",
        success:false
    })
}

  const task = new Task(req.body)
    await task.save()
return res.status(200).json({
    message:"task is created",
    success:true
})

    } catch (error) {
     
        return res.status(400).json({
            message:error.message,
            successs:false
        })
    }
}





export const readTask= async (req, res) => {

    try {

        const task = await Task.find()
        return res.json({
            messsge: "all task are here ",
            task,
        })
    }

    catch (error) {
        return res.json({
            message: "there is no task stored ",
            success: false
        })

    }

}

//READ ONE PROJECT FROM ALL  THE PROJECTS 

export const readOneTask = async (req, res) => {
    try {
        const { id } = req.params
        const onetask = await Task.findById(id);

        if (!onetask) {
            return res.json({
                message: "data not found ",
                success: false,
            })
        }
        return res.json({
            message: "one task is here ",
            success: true,
            onetask

        })

    } catch (error) {
        return res.json({
            message: error.message,
            success: false
        })
    }
}

//UPDATE PROJECT 

export const updatedTask = async (req, res) => {

    try {
        const { id } = req.params


        const existingTask= await Task.findById(id);
        if (!existingTask) {
            return res.json({
                message: "task is not found ",
                success: false
            })
        }


        const task = await Task.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        return res.json({
            message: "task is updated ",
            success: true,
            task
        })
    } catch (error) {
        return res.json({
            message: "not updated api error ",
            success: false
        })
    }
}

//DELETE THE PROJECT 

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params

        const DeleteTask = await Task.findByIdAndDelete(id)

        if (!DeleteTask) {
            return res.json({
                message: "task donot found ",
                succes: false
            })
        }
        return res.json({
            message: "task delete successfully",
            success: true,
        })
    } catch (error) {
        return res.json({
            message: error.message,
            success: false
        })
    }
}