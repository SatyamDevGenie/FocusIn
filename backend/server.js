import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';  // Ensure you add the .js extension
import chalk from "chalk";


// Load environment variables
dotenv.config();
connectDB();

// Middleware
app.use(express.json());

const app = express();

app.get("/", (req, res)=>{
    res.send("FocusIn API is running")
}) 

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    );
  });