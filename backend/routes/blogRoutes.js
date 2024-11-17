import express from "express";
import { createBlog, getSingleBlog } from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";  // Assuming you have authentication middleware

const router = express.Router();

// @route POST /api/blogs/create
// @access Private
router.post("/create", protect, createBlog);

// @route GET /api/blogs/:id
// @access Public
router.get("/:id", getSingleBlog);

export default router;
