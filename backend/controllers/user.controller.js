import User from "../models/user.model";

export const getUsers = async function(req,res){
    try {
        const loggesUserId = req.user._id

        const filteredUser = await User.find({_id: {$ne: loggesUserId}}).select(".password")

        res.status(200).json(filteredUser)
    } catch (error) {
        console.log(error.message);
        res.staus(500).json({error: "error came"})
        
    }
}