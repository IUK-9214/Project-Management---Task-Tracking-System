import express from "express"
import { addproject, readOneProject, readproject, updatedProject, deleteProject} from "../controller/projectController.js"
import { addTask, deleteTask, readOneTask, readTask, updatedTask } from "../controller/taskController.js"
import { addUsers, deleteUser, readAllUser, readOneUser, updateUser } from "../controller/adminUserController.js"

const router =express.Router()


router.route("/project").post(addproject)
router.route("/project").get(readproject)
router.route("/project/:id").get(readOneProject)
router.route("/project/:id").put(updatedProject)
router.route("/project/:id").delete(deleteProject)



router.route("/task").post(addTask)
router.route("/task").get(readTask)
router.route("/task/:id").get(readOneTask)
router.route("/task/:id").put(updatedTask)
router.route("/task/:id").delete(deleteTask)



router.route("/adminUser").post(addUsers)
router.route("/adminUser").get(readAllUser)
router.route("/adminUser/:id").get(readOneUser)
router.route("/adminUser/:id").put(updateUser)
router.route("/adminUser/:id").delete(deleteUser)


export  default router