import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import grades from "./routes/grades.mjs";

const PORT = 5050;
const app = express();

// env variables
dotenv.config();

// connect to MongoDb database
mongoose.connect(process.env.ATLAS_URI);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use("/grades", grades);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
