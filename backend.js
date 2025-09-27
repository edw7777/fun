import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai";

import { config } from "./config.js";  // Import from config file

const genAI = new GoogleGenerativeAI(config.apiKey);


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('myButton');
  const targetParagraph = document.getElementById('targetParagraph');

  button.addEventListener('click', () => callEndpoint(targetParagraph));
});

async function callEndpoint(targetParagraph) {
  console.log("Button clicked!");
  targetParagraph.textContent = 'Calling GeminiAPI!';

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent("Generate 10 random words");
    const response = await result.response;
    targetParagraph.textContent = response.text();
  } catch (error) {
    console.error("Error:", error);
    targetParagraph.textContent = "Error calling API";
  }
}

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }