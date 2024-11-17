import Task from "../models/taskModel.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

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




// @desc Get all tasks for the logged-in user
// @route GET /api/tasks
// @access Private
const getAllTasks = asyncHandler(async (req, res) => {
  try {
    // Find all tasks associated with the user
    const tasks = await Task.find({ userId: req.user._id });

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ success: false, message: "No tasks found" });
    }

    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching tasks. Please try again later.",
    });
  }
});




// @desc Update an existing task
// @route PUT /api/tasks/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  try {
    const { taskName, description, startTime, endTime, date, days, voiceMessageUrl, textToSpeechUrl } = req.body;

    // Find the task by ID
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    // Check if the task belongs to the logged-in user
    if (task.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ success: false, message: "Not authorized to update this task" });
    }

    // Update the task fields
    task.taskName = taskName || task.taskName;
    task.description = description || task.description;
    task.startTime = startTime || task.startTime;
    task.endTime = endTime || task.endTime;
    task.date = date || task.date;
    task.days = days || task.days;
    task.voiceMessageUrl = voiceMessageUrl || task.voiceMessageUrl;
    task.textToSpeechUrl = textToSpeechUrl || task.textToSpeechUrl;

    // Save the updated task
    const updatedTask = await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    console.error("Error updating task:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the task. Please try again later.",
    });
  }
});




// @desc Delete a task
// @route DELETE /api/tasks/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  try {
    const taskId = req.params.id;

    // Validate if the taskId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ success: false, message: "Invalid task ID" });
    }

    // Find the task by ID
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    // Check if the task belongs to the logged-in user
    if (task.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ success: false, message: "Not authorized to delete this task" });
    }

    // Remove the task from the database
    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting task:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the task. Please try again later.",
    });
  }
});




export { addTask, getAllTasks, updateTask, deleteTask };
