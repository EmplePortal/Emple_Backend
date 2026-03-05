import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


connectDB();

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

