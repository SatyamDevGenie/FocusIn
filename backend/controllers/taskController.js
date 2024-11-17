import Task from "../models/taskModel.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc Create a new task
// @route POST /api/tasks
// @access Private
const addTask = asyncHandler(async (req, res) => {
  try {
    const { taskName, description, startTime, endTime, date, days, voiceMessageUrl, textToSpeechUrl } = req.body;

    // Create a new task
    const task = new Task({
      userId: req.user._id,
      taskName,
      description,
      startTime,
      endTime,
      date,
      days,
      voiceMessageUrl,
      textToSpeechUrl,
    });

    const createdTask = await task.save();

    // Associate the task with the user
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.tasks.push(createdTask._id);
    await user.save();

    res.status(201).json({ success: true, message: "Task created successfully", data: createdTask });
  } catch (error) {
    console.error("Error creating task:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the task. Please try again later.",
    });
  }
});

export { addTask };
