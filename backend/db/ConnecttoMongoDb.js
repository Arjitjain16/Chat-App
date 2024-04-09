import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();


const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error, "to connect"); // Changed console to console.error
    }
};

export default  connectToMongoDb