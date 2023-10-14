import cohere from "cohere-ai";
import { readFile, writeFile } from "node:fs/promises";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

cohere.init(API_KEY);

const generateResponse = async (prompt) => {
  try {
    const response = await cohere.generate({
      model: "command",
      prompt,
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      stop_sequences: [],
      return_likelihoods: "NONE",
    });
    return response.body.generations[0].text;
  } catch (error) {
    throw new Error("Error al generar la respuesta: " + error.message);
  }
};

const addNewMessage = async (client, server) => {
  try {
    const bufferData = await readFile("./db/history.json");
    const objData = JSON.parse(bufferData);
    const newMessage = { client, server };
    const newDataObj = [...objData, newMessage];
    await writeFile("./db/history.json", JSON.stringify(newDataObj));
  } catch (error) {
    throw new Error("Error al guardar el mensaje: " + error.message);
  }
};

const sendRequest = async (req, res) => {
  const body = req.body;
  try {
    const prediction = await generateResponse(body.query);
    res.json(prediction);
    addNewMessage(body.query, prediction);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { sendRequest };
