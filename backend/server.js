import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',function(req,res){
    res.send("Hello")
})

app.use("/api/auth", authRoutes)

app.listen(PORT ,()=> console.log(`Port running on ${PORT}`))
