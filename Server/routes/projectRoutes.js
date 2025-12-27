import express from "express"
import { addproject, readOneProject, readproject, updatedProject, deleteProject} from "../controller/projectController.js"

const router =express.Router()


router.route("/project").post(addproject)
router.route("/project").get(readproject)
router.route("/project/:id").get(readOneProject)
router.route("/project/:id").put(updatedProject)
router.route("/project/:id").delete(deleteProject)

export  default router