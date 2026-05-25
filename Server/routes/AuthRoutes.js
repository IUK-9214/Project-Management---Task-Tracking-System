import express from "express"
import { checkAuth, login, logout, Registartion } from "../controller/UserAuthorization.js"
import { ProtectRouting } from "../middleware/AuthMiddleWare.js"


const AuthRoutes=express.Router()

AuthRoutes.post("/auth/registartion",Registartion)
AuthRoutes.post("/auth/login",login)
AuthRoutes.post("/auth/logout",  logout)
AuthRoutes.get("/check", ProtectRouting, checkAuth);

export default AuthRoutes;