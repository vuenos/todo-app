import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;



app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)

})