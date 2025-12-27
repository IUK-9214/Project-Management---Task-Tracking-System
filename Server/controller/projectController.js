import Projects from "../modules/project.js"



//PROJECT CREATING API 

export const addproject = async (req, res) => {

    try {
        //check if any is missing 
        const { title, desc } = req.body
        if (!title || !desc) {
            return res.status(500).json({
                message: "give title or desc man ",
                success: fasle
            })
        }
        //saving the project here 
        const Project = Projects(req.body)
        await Project.save()

        return res.status(200).json({
            message: "project created ",
            success: true
        })

    } catch (error) {
        return res.status(400).json({
            message: message.error,
            success: fasle
        })
    }


}

//READ ALL THE PROJECT 

export const readproject = async (req, res) => {

    try {

        const project = await Projects.find()
        return res.json({
            messsge: "all projects are here ",
            project,
        })
    }

    catch (error) {
        return res.json({
            message: "there is no project stored ",
            success: false
        })

    }

}

//READ ONE PROJECT FROM ALL  THE PROJECTS 

export const readOneProject = async (req, res) => {
    try {
        const { id } = req.params
        const oneproject = await Projects.findById(id);

        if (!oneproject) {
            return res.json({
                message: "data not found ",
                success: false,
            })
        }
        return res.json({
            message: "one project is here ",
            success: true,
            oneproject

        })

    } catch (error) {
        return res.json({
            message: error.message,
            success: false
        })
    }
}

//UPDATE PROJECT 

export const updatedProject = async (req, res) => {

    try {
        const { id } = req.params


        const existingProject = await Projects.findById(id);
        if (!existingProject) {
            return res.json({
                message: "project is not found ",
                success: false
            })
        }


        const project = await Projects.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        return res.json({
            message: "project is updated ",
            success: true,
            project
        })
    } catch (error) {
        return res.json({
            message: "not updated api error ",
            success: false
        })
    }
}

//DELETE THE PROJECT 

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params

        const DeleteProject = await Projects.findByIdAndDelete(id)

        if (!DeleteProject) {
            return res.json({
                message: "project donot found ",
                succes: false
            })
        }
        return res.json({
            message: "project delete successfully",
            success: true,
        })
    } catch (error) {
        return res.json({
            message: error.message,
            success: false
        })
    }
}