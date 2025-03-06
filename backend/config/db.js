import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {DB_NAME} from '../utils/contants.js'

mongoose.set("strictQuery", false);
dotenv.config({path: 'C:/Users/Yelgo/OneDrive/Desktop/testCaseManagement/backend/.env'});
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB