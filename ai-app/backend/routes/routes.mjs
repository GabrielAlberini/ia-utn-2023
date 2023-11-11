import express from "express";
import { pipeline } from "@xenova/transformers";
import wavefile from "wavefile";
import { readdir, writeFile } from "fs/promises";
import { randomUUID } from "crypto";
import path from "path";

import { PUBLIC_PATH, FILE_EXTENSION } from "../server/app.mjs";

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { phrase } = req.body;
    const embed = process.env.EMBED;

    const synthesizer = await pipeline(
      "text-to-speech",
      "Xenova/speecht5_tts",
      {
        quantized: false,
      }
    );

    const output = await synthesizer(phrase, { speaker_embeddings: embed });

    const wav = new wavefile.WaveFile();
    wav.fromScratch(1, output.sampling_rate, "32f", output.audio);

    const id = randomUUID();
    const filePath = path.join(PUBLIC_PATH, `audio-${id}.wav`);

    await writeFile(filePath, wav.toBuffer());

    const host = req.get("host");
    res.json({
      url: `${req.protocol}://${host}/audio-${id}.${FILE_EXTENSION}`,
    });
  } catch (error) {
    console.error("Error generating audio:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/recuperate", async (_, res) => {
  try {
    const files = await readdir(PUBLIC_PATH);
    const audioFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === `.${FILE_EXTENSION}`
    );
    res.json({ audioFiles });
  } catch (error) {
    console.error("Error reading public folder:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", (_, res) => {
  res.send({
    status: "200",
    message: "Server Up",
  });
});

export { router };
