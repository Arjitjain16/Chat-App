import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import connectToMongoDb from "./db/ConnecttoMongoDb.js"

const app = express()

const PORT = process.env.PORT || 5000


app.use(express.json()) // middleware for req.body
app.use(express.urlencoded({extended: true})) // middleware for req.body


app.use("/api/auth", authRoutes)
app.get('/',function(req,res){
    res.send("Hello")
})

app.listen(PORT ,()=>{
    connectToMongoDb()
    console.log(`Port running on ${PORT}`)
})
