import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "../routes/routes.mjs";
dotenv.config();

export const PORT = process.env.PORT ?? 1234;
export const PUBLIC_PATH = process.env.PUBLIC_PATH;
export const FILE_EXTENSION = process.env.FILE_EXTENSION;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use("/api", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
