import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCQfpehr3WCIR07VdDldTfpy-JBAF_pUKA");

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent("Hello!");
  console.log(result.response.text());
}

main();