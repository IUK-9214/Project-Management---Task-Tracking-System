import { GenerateToken } from "../libs/GenerateToken.js";
import AuthUser from "../modules/auth.js";
import bcrypt from "bcrypt"


export const Registartion = async (req, res) => {
    try {
        const { Email, FullName, Password } = req.body
        if (!Email || !FullName || !Password) {
            return res.satatus(400).json({
                message: "incomplete data is provided",
                success: false
            })
        }
        if (Password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        const user = await AuthUser.findOne({ Email });
        if (user) {
            return res.status(400).json({
                messsage: "user is already registered ", success: false
            })
        }
        const Salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(Password, Salt)

        const NewUser = new AuthUser({
            Email,
            FullName,
            Password: hashedPassword,
        });

        if (NewUser) {
            GenerateToken(NewUser._id, res)
            await NewUser.save()

            res.status(201).json({
                _id: NewUser._id,
                FullName: NewUser.FullName,
                Email: NewUser.Email,

            })
        }
        else {
            res.status(400).json({
                message: "Invalid user data",
                success: false
            })
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const login = async (req, res) => {
    try {

        const { Password, Email } = req.body

        if (!Password || !Email) {
            return res.status(400).json(
                {
                    message: "Incomplete data is Provided",
                    success: false
                }
            )
        }

        const user = await AuthUser.findOne({ Email })
        if (!user) {
            return res.status(400).json({
                message: "user is not regesterted yet first signup",
                success: false,
            })
        }

        if (Password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        const isCorrectPassword = await bcrypt.compare(Password, user.Password)
        if (!isCorrectPassword) {
            return res.status(400).json({
                message: "Incorrect Password",
                sucess: false
            })
        }

        GenerateToken(user._id, res)

        res.status(200).json({
            userId: user._id,
            Email: user.Email,
            FullName: user.FullName
        })

    } catch (error) {

        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });

    }

};

export const logout=async()=>{
    try {
        res.cookie("jwt","",{ expires: new Date(0) })
        res.status(200).json({message:"Logged out thank You for Visiting ",
            success:true
        })

    } catch (error) {
         console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" }); 

    }
};



export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};