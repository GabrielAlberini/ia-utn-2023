import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { readFileSync } from "fs";
dotenv.config();

const httpPort = process.env.HTTP_PORT ?? 3001;

const app = express();
app.use(cors());

app.get("/api", (__, res) => {
  res.send({
    status: 200,
    name: "API from tcp-chat | UTN IA",
    version: "1.0.0",
  });
});

app.get("/api/messages", (__, res) => {
  const pathFile = process.env.PATH_DB_FILE;
  const jsonData = readFileSync(pathFile);
  const messages = JSON.parse(jsonData);
  res.send({ data: messages });
});

app.listen(httpPort, () => {
  console.log(`HTTP Server up on http://localhost:${httpPort}`);
});
