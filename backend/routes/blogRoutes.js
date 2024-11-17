import express from "express";
import { createBlog, getSingleBlog, getAllBlogs, updateBlog, deleteBlog } from "../controllers/blogController.js";
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

// @route PUT /api/blogs/:id
// @access Private (Only the user who created the blog can update it)
router.put("/:id", protect, updateBlog);

// @route DELETE /api/blogs/:id
// @access Private (Only the user who created the blog can delete it)
router.delete("/:id", protect, deleteBlog);



export default router;
