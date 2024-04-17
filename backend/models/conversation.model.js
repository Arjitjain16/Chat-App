import mongoose from "mongoose"
import Message from "./message.model"

const conversationSchema = new mongoose.Schema({
    participants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : User
        }
    ],
    Message : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : Message,
            default : []
        }
    ]
}, {timestamps:true})

const Conversation = mongoose.model("Message", conversationSchema)

export default Conversation