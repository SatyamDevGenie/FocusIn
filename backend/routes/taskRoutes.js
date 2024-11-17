import express from "express";
import { addTask, getAllTasks, updateTask, deleteTask, getSingleTask } from "../controllers/taskController.js";
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


// @route GET /api/tasks/:id
// @desc Get single task for the logged-in user
// @access Private
router.get("/:id", protect, getSingleTask)


// @route PUT /api/tasks/:id
// @desc Update a task
// @access Private
router.put("/:id", protect, updateTask);


// @route DELETE /api/tasks/:id
// @desc Delete a task
// @access Private
router.delete("/:id", protect, deleteTask);

export default router;
