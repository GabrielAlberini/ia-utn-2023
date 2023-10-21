import { randomUUID } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

const pathFile = process.env.PATH_DB_FILE;

export const saveMessage = (message, user) => {
  const jsonData = readFileSync(pathFile);
  const messages = JSON.parse(jsonData);
  const newMessage = {
    id: randomUUID(),
    user,
    message,
    date: new Date().toLocaleString(), // 21/10/2023, 09:43:53
  };
  const newMessages = [...messages, newMessage];
  const jsonMessages = JSON.stringify(newMessages);
  writeFileSync(pathFile, jsonMessages);
};
