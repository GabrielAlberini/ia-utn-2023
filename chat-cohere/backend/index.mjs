import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { sendRequest } from "./controller/querie.mjs";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/request", sendRequest);

app.get("/api", (req, res) => {
  res.send({ status: "Server is OK" });
});

app.listen(PORT, () => {
  console.log("Server is running on port: http://localhost:" + PORT);
});
