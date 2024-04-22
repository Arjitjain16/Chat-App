import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js"
import userRoute from "./routes/user.route.js"

import connectToMongoDb from "./db/ConnecttoMongoDb.js"

const app = express()


dotenv.config();

const PORT = process.env.PORT || 5000


app.use(express.json()) // middleware for req.body
app.use(express.urlencoded({extended: true})) // middleware for req.body
app.use(cookieParser())

// route ko use krna hai 
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);


app.get('/',function(req,res){
    res.send("Hello")
})

app.listen(PORT ,()=>{
    connectToMongoDb()
    console.log(`Port running on ${PORT}`)
})
