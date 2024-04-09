import User from "../models/user.model.js"

export const signup = async(req,res)=>{
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body

        if (password ==! confirmPassword){
            return res.status(400).json({error : "Password does not match"})
        }

        const user = await User.findOne({username})

        if (user){
            return res.status(400).json({error : "User already exist"})
        }

        const boyProfilepic = "https://avatar.iran.liara.run/public/boy"
        const girlPeofilepic = "https://avatar.iran.liara.run/public/girl"

        const newUser = new user({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilepic : girlPeofilepic
        })
        await newUser.save()
    }
    catch(error){
        console.log(error)
    }
}

export const login = (req,res)=>{
    res.send("login")
}

export const logout = (req,res)=>{
    res.send("logout")
}