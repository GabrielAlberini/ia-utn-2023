import cohere from "cohere-ai";

cohere.init("WGn4JhbZngyOFZdehb81wjAdcEllKFPR7JvfG6eb");

const response = await cohere.generate({
  model: "command",
  prompt: "Hi, good morning",
  max_tokens: 300,
  temperature: 0.9,
  k: 0,
  stop_sequences: [],
  return_likelihoods: "NONE",
});

const cohereMsg = response.body.generations[0].text;

console.log(cohereMsg);
