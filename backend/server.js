import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js"; // ✅ Correct import

import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/v1", transactionRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
