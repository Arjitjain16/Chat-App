import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.objectId,
        ref: User,
        unique: true
    },
    recieverId:{
        type:mongoose.Schema.Types.objectId,
        ref: User,
        unique: true
    },
    message:{
        type:String,
        require:true
    }
},{timestamps:true})

const Message = mongoose.model("Message",messageSchema)

export default Message