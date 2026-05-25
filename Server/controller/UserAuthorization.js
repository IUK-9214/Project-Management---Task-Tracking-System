import { GenerateToken } from "../libs/GenerateToken.js";
import AuthUser from "../modules/auth.js";
import bcrypt from "bcrypt";



export const Registartion = async (req, res) => {
    try {
        const { Email, FullName, Password } = req.body;

        if (!Email || !FullName || !Password) {
            return res.status(400).json({
                message: "Incomplete data is provided",
                success: false
            });
        }

        if (Password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const userExists = await AuthUser.findOne({ Email });

        if (userExists) {
            return res.status(400).json({
                message: "User is already registered",
                success: false
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

     
        const NewUser = new AuthUser({
            Email,
            FullName,
            Password: hashedPassword,
            role: "user"
        });

        await NewUser.save();

        GenerateToken(NewUser._id, res);

        return res.status(201).json({
            _id: NewUser._id,
            FullName: NewUser.FullName,
            Email: NewUser.Email,
            role: NewUser.role
        });

    } catch (error) {
        console.log("Error in registration controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(400).json({
                message: "Incomplete data is provided",
                success: false
            });
        }

        const user = await AuthUser.findOne({ Email });

        if (!user) {
            return res.status(400).json({
                message: "User not registered. Please signup first",
                success: false
            });
        }

        const isCorrectPassword = await bcrypt.compare(Password, user.Password);

        if (!isCorrectPassword) {
            return res.status(400).json({
                message: "Incorrect Password",
                success: false
            });
        }

        GenerateToken(user._id, res);

        return res.status(200).json({
            userId: user._id,
            Email: user.Email,
            FullName: user.FullName,
            role: user.role
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { expires: new Date(0) });

        return res.status(200).json({
            message: "Logged out successfully",
            success: true
        });

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export const checkAuth = (req, res) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};