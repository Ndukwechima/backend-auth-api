import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cors({ origin:true, credentials: true }));


app.use(express.json()); // allows us to parse imcoming requests : req.body
app.use(cookieParser()); // allows us to parse cookies

app.use("/api/auth", authRoutes); // authentication routes

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port", PORT);
});
