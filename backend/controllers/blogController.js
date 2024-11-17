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



// @desc Get a single blog by ID
// @route GET /api/blogs/:id
// @access Public
const getSingleBlog = asyncHandler(async (req, res) => {
    const { id } = req.params; // Get the blog ID from the route parameter
  
    // Find the blog by ID
    const blog = await Blog.findById(id).populate("author", "name email"); // Populate the author field with user's name and email
  
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
  
    // Respond with the blog data
    res.status(200).json({
      success: true,
      data: blog,
    });
  });


  // @desc Get all blogs for the logged-in user
// @route GET /api/blogs
// @access Private (Protected Route, requires login)
const getAllBlogs = asyncHandler(async (req, res) => {
    try {
      // Find all blogs for the logged-in user (filter by user ID)
      const blogs = await Blog.find({ author: req.user._id }).populate("author", "name email");
  
      if (!blogs || blogs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No blogs found for this user",
        });
      }
  
      // Respond with the list of blogs
      res.status(200).json({
        success: true,
        data: blogs,
      });
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching blogs. Please try again later.",
      });
    }
  });



export { createBlog, getSingleBlog, getAllBlogs };
