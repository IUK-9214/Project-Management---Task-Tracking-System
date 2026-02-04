import express from "express"
import { checkAuth, login, logout, Registartion } from "../controller/UserAuthorization.js"
import { ProtectRouting } from "../middleware/AuthMiddleWare.js"


const AuthRoutes=express.Router()

AuthRoutes.post("/registartion",Registartion)
AuthRoutes.post("/login",login)
AuthRoutes.post("/logout",ProtectRouting,  logout)
AuthRoutes.get("/check", ProtectRouting, checkAuth);

export default AuthRoutes;