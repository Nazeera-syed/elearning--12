import mongoose from "mongoose";
import { User } from "../models/User.js";

export const connectDb =async()=>{
    try {
        await mongoose.connect(process.env.DB);
        console.log('database connected');
        //create empty user collection
        await User.createCollection();
        console.log('User collection created successfully');
        
    } catch (error) {
        console.log(error);
        
    }
}

 