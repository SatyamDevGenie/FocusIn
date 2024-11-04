import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';  // Ensure you add the .js extension
import chalk from "chalk";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';


const app = express();

// Load environment variables
dotenv.config();
connectDB();

// Middleware
app.use(express.json());

app.use("/api/users", userRoutes);



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