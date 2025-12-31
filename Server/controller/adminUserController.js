import AdminUsers from "../modules/users.js"



export const addUsers = async (req, res) => {

    try {
        const { fullName, email, role } = req.body
        if (!fullName || !email || !role) {
            return res.status(400).json({
                message: "give name or email or role",
                success: false
            })
        }

        const AdminUser = new AdminUsers(req.body)
        await AdminUser.save()

        return res.status(200).json({
            message: "User is save admin sahab",
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "not created error in controller",
            success: true
        })
    }
}


export const readAllUser = async (req,res) => {
    try {

        const AdminUser = await AdminUsers.find()
        if (!AdminUser) {
            return res.status(400).json({
                message: "data not founded",
                sucess: false
            })
        }
        return res.status(200).json({
            message: "read all your user sir",
            success: true,
            AdminUser
        })

    } catch (error) {
        return res.status(400).json({
            message: "request is fail try agian bad luck next time ",
            success: false
        })
    }

}
export const readOneUser = async (req,res) => {
    try {
        const { id } = req.params

        const AdminUser = await AdminUsers.findById(id);
        if (!AdminUser) {
            return res.status(400).json({
                message: "data not founded",
                sucess: false
            })
        }
        return res.status(200).json({
            message: "read all your user sir",
            success: true,
            AdminUser
        })


    } catch (error) {
        return res.status(404).json({
            message: error.message,
            success: false
        })
    }

}
export const updateUser = async (req, res) => {

    try {
        const { id } = req.params

        const existingUser = await AdminUsers.findById(id)

        if (!existingUser) {
            return res.status(400).json({
                message: "not found user ",
                success: false
            })
        }

        const AdminUser = await AdminUsers.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        return res.status(200).json({
            message: "updated the user ",
            success: true,
            AdminUser
        })



    } catch (error) {
        return res.status(400).json({
            message: error.message,
            success: false
        })
    }

}
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await AdminUsers.findByIdAndDelete(id)
        return res.status(200).json({
            message: "user dafa hugia hhhh ",
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

