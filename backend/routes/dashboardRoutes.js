import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getInstructorDashboard } from "../controllers/dashboardController.js";

const router = express.Router();
router.get("/instructor", protect, getInstructorDashboard);
export default router;
