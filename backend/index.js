import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
const corsOptions = {
    origin: process.env.CORS_ORIGIN.split(','),
    credentials: true,
};

dotenv.config();
connectDB();

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser())
app.use('/api/users', userRoutes);
app.use('/api/project', projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));