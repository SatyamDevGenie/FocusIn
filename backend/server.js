import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';  // Ensure you add the .js extension
import chalk from "chalk";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';


// Load environment variables
dotenv.config();
connectDB();


const app = express();

 app.use(cors());

// Enable CORS for a specific origin (your frontend)
// const corsOptions = {
//     origin: 'http://localhost:8082',  // Replace with your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specific methods if needed
//     allowedHeaders: ['Content-Type', 'Authorization']  // Customize as needed
//   };
  
//   // Use CORS middleware with the configured options
//   app.use(cors(corsOptions));


// Middleware
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/blogs", blogRoutes)

app.get("/", (req, res)=>{
    res.send("FocusIn API is running")
}) 

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(
        chalk.yellow.bold (`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );
  });