import Blog from "../models/blogModel.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";  // for handling async routes with try/catch

// @desc Create a new blog
// @route POST /api/blogs/create
// @access Private (only logged-in users can create blogs)
const createBlog = asyncHandler(async (req, res) => {
  const { title, content, images, videos } = req.body;

  // Validation to ensure required fields are provided
  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: "Title and content are required",
    });
  }

  // Create a new blog instance
  const blog = new Blog({
    title,
    content,
    images: images || [],  // Allow empty array if no images
    videos: videos || [],  // Allow empty array if no videos
    author: req.user._id,  // Associate blog with the logged-in user
  });

  // Save the new blog to the database
  const createdBlog = await blog.save();

  // Optional: Add the blog to the user's blog collection
  await User.findByIdAndUpdate(req.user._id, {
    $push: { blogs: createdBlog._id }, // Push blog ID into user's blogs array
  });

  // Respond with the created blog
  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    data: createdBlog,
  });
});

export { createBlog };
