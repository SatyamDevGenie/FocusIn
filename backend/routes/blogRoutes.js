import express from "express";
import { createBlog } from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";  // Assuming you have authentication middleware

const router = express.Router();

// @route POST /api/blogs/create
// @access Private
router.post("/create", protect, createBlog);

export default router;
