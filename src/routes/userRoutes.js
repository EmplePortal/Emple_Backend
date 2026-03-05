import express from "express";
import { syncUser } from "../controllers/userController.js";
import { verifyDescope } from "../middleware/verifyDescope.js";

const router = express.Router();

router.post("/sync", verifyDescope, syncUser);

export default router;