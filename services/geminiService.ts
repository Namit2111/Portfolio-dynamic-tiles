import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your environment
const ai = new GoogleGenAI({ apiKey });

export const streamChatResponse = async (
  history: { role: string; text: string }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct a context-aware system instruction
    const systemInstruction = `
      You are an AI assistant for a creative developer's portfolio website named "Lumina".
      The developer is a Senior Frontend Engineer specializing in React, TypeScript, and AI integrations.
      
      Key traits to embody:
      - Professional yet witty and creative.
      - Concise in your answers.
      - You can explain the technical stack of this website (React, Tailwind, Framer Motion, Gemini API).
      
      If the user asks about contact info, suggest they check the Contact tile.
      If the user asks about projects, mention they can explore the Projects tile.
      Keep responses under 100 words unless asked for a detailed technical explanation.
    `;

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const resultStream = await chat.sendMessageStream({ message: newMessage });

    for await (const chunk of resultStream) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    throw error;
  }
};
