import * as dotenv from 'dotenv'; 
dotenv.config(); 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/userRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(express.json()); // parse JSON bodies
app.use(cors({ origin: "https://clothence-frontend.onrender.com" })); // enable CORS

// ✅ Routes
app.use("/api/auth", userRoute);

// Start server
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err.message);
    }
};

startServer();
