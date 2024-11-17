import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  taskName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  startTime: {
    type: Date,
    required: true,
  },

  endTime: {
    type: Date,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  days: {
    type: [String],
    required: true,
  },

  voiceMessageUrl: { type: String },

  textToSpeechUrl: { type: String },
});

const Task = mongoose.model("Task", taskSchema)

export default Task;
