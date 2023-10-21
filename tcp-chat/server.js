// El Protocolo de Control de Transmisión (TCP) es un protocolo de red que permite que dos computadoras se comuniquen y compartan datos de manera confiable a través de una red.

import net from "node:net";
import dotenv from "dotenv";
import readline from "readline-sync";
import { saveMessage } from "./utils/saveMessage.js";
dotenv.config();

const port = process.env.PORT ?? 3000;

const serverTCP = net.createServer();

const sendMessage = (client) => {
  const serverMsg = readline.question("Server: ");
  client.write(serverMsg);
  saveMessage(serverMsg, process.argv[2]);
};

serverTCP.on("connection", (socket) => {
  socket.on("data", (clientData) => {
    const clientMsg = clientData.toString();
    console.log("Client: " + clientMsg);
    sendMessage(socket);
  });

  socket.on("close", () => {
    console.log("Connection closed.");
  });

  socket.on("error", () => {
    console.log("Error client.");
  });

  console.log("Client connected.");
});

serverTCP.listen(port, () => {
  console.log("Server is running on port: " + port);
});
