import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import express from 'express';

const app = express();
app.use(express.json());

export const signup = async(req,res)=>{
    try{
        console.log(req.body)
        const {fullName, username, password, confirmPassword, gender} = req.body

        // if (!fullName || !username || !password || !confirmPassword || !gender) {
        //     return res.status(400).json({ error: "Missing required fields" });
        // }

        if (password !== confirmPassword){
            return res.status(400).json({error : "Password does not match"})
        }

        const user = await User.findOne({username})

        if (user){
            return res.status(400).json({error : "User already exist"})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(password, salt)

        const boyProfilepic = "https://avatar.iran.liara.run/public/boy"
        const girlProfilepic = "https://avatar.iran.liara.run/public/girl"

        const newUser =new User({
            fullName,
            username,
            password:hashpassword,
            gender,
            profilePic: gender === "male" ? boyProfilepic : girlProfilepic
        })

        if(newUser){
            
        await newUser.save()
        res.status(201).json({
            _id : newUser._id,
            fullName : newUser.fullName,
            username : newUser.username,
            profilePic : newUser.profilePic
        })
        }else{
            res.status(400).json({error : "Invalid user data"})
        }
    }
    catch(error){
        // console.log("Error in signup", error.message)
        res.status(500).json({error : error})
    }
}

export const login = (req,res)=>{
    res.send("login")
}

export const logout = (req,res)=>{
    res.send("logout")
}

