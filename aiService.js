import OpenAI from "openai";
import "dotenv/config";

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY missing in .env");
}

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

export async function getTravelPlan(prompt) {
  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("GROQ AI ERROR:", error.message);
    throw error;
  }
}
