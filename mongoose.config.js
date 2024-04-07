import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

let url = process.env.mongo_url;

let connect = async()=>{
    console.log(`Connected to Database hospital`);
    await mongoose.connect(url);
}

export default connect;