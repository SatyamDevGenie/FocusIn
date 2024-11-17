import express from "express";
import { addTask, getAllTasks } from "../controllers/taskController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// @route POST /api/tasks/create
// @desc Create a new task
// @access Private
router.post("/create", protect, addTask);

// @route GET /api/tasks
// @desc Get all tasks for the logged-in user
// @access Private
router.get("/", protect, getAllTasks);

export default router;
