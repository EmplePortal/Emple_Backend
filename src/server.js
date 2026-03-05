import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import 'dotenv/config'; // This imports AND executes config() in one line

import userRoutes from "./routes/userRoutes.js";

const app = express();


app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.use(express.json());

connectDB();

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

