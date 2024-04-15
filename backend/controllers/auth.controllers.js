import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import express from 'express';
import generateTokenAndSetCookie from "../Utils/generateTokens.js";

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
            await generateTokenAndSetCookie(newUser._id, res)
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

export const login = async (req,res)=>{
    try{
        const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);
		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});

    }catch(error){
        res.status(500).json({error : error})
    }
}

export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge: 0})
        res.status(200).json({message: "loggedOut Successfully"})

    }catch(error){
        res.status(500).json({error : error})
    }
}

