// import User from "../models/user.model.js"
// import express from 'express';

// const app = express();
// app.use(express.json());

// export const signup = async(req,res)=>{
//     try{
//         const {fullName, username, password, confirmPassword, gender} = req.body

//         if (password !== confirmPassword){
//             return res.status(400).json({error : "Password does not match"})
//         }

//         const user = await User.findOne({username})

//         if (user){
//             return res.status(400).json({error : "User already exist"})
//         }

//         const boyProfilepic = "https://avatar.iran.liara.run/public/boy"
//         const girlProfilepic = "https://avatar.iran.liara.run/public/girl"

//         const newUser = new user({
//             fullName,
//             username,
//             password,
//             gender,
//             profilePic: gender === "male" ? boyProfilepic : girlProfilepic
//         })
//         await newUser.save()

//         res.status(201).json({
//             _id : newUser._id,
//             fullName : newUser.fullName,
//             username : newUser.username,
//             profilePic : newUser.profilePic
//         })
//     }
//     catch(error){
//         console.log("Error in signup", error.message)
//         res.status(500).json({error : "Internal server error"})
//     }
// }

// export const login = (req,res)=>{
//     res.send("login")
// }

// export const logout = (req,res)=>{
//     res.send("logout")
// }


import User from "../models/user.model.js";
import express from 'express';

const app = express();
app.use(express.json());

export const signup = async (req, res) => {
    console.log(req.body); // Log the request body to inspect its content

    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password does not match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const boyProfilepic = "https://avatar.iran.liara.run/public/boy";
        const girlProfilepic = "https://avatar.iran.liara.run/public/girl";

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilepic : girlProfilepic
        });

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
    } catch (error) {
        console.log("Error in signup", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = (req, res) => {
    res.send("login");
};

export const logout = (req, res) => {
    res.send("logout");
};
