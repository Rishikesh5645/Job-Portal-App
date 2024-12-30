// import
// const express=require("express");
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
// import files
import connectDB from "./config/db.js";
// import routes
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRouter.js";
import jobRoutes from "./routes/jobsRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

// dot env config
dotenv.config();

// connect db
connectDB();

// rest object
const app=express();

// middlewares
app.use(express.json()); 
app.use(cors());
app.use(morgan("dev"));

// routes
// app.get("/",(req,res)=>{
//     res.send("<h1>Welcome to My Job Portal Application</h1>");
// });
app.use("/api/v1/test",testRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/job",jobRoutes);
//validation middleware
app.use(errorMiddleware);
// port
const PORT=process.env.PORT || 8000;
// listen
app.listen(PORT,()=>{
    console.log(`Node Server running  on PORT ${PORT}`.bgCyan.white);
});