import express from "express";
import { createBlog, getSingleBlog, getAllBlogs } from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";  // Assuming you have authentication middleware

const router = express.Router();

// @route POST /api/blogs/create
// @access Private
router.post("/create", protect, createBlog);

// @route GET /api/blogs/:id
// @access Public
router.get("/:id", getSingleBlog);

// @route GET /api/blogs
// @access Private (Only logged-in users can access this)
router.get("/", protect, getAllBlogs);

export default router;
