import net from "node:net";
import dotenv from "dotenv";
import readline from "readline-sync";
import { saveMessage } from "./utils/saveMessage.js";
dotenv.config();

const OPTIONS = {
  port: process.env.PORT,
  host: process.env.HOST,
};

const clientTCP = net.connect(OPTIONS);

const sendMessage = () => {
  const clientMsg = readline.question("Client: ");
  if (!(clientMsg === "--close")) {
    clientTCP.write(clientMsg);
    saveMessage(clientMsg, process.argv[2]);
  } else {
    clientTCP.end();
  }
};

clientTCP.on("connect", () => {
  console.log("Connection successful.");
  sendMessage();
});

clientTCP.on("data", (serverData) => {
  const serverMsg = serverData.toString();
  console.log("Server: " + serverMsg);
  sendMessage();
});
