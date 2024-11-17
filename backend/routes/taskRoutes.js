import express from "express";
import { addTask } from "../controllers/taskController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// @route POST /api/tasks
// @desc Create a new task
// @access Private
router.post("/create", protect, addTask);

export default router;
