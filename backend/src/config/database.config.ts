import mongoose from "mongoose";
import { Env } from "./env.config.js";

const connectDb = async() => {
    try{
        await mongoose.connect(Env.MONGODB_URI, {
            serverSelectionTimeoutMS: 8000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 10000,
        });
        console.log("Database connected successfully");
    } catch (error){
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

export default connectDb;