
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAIResponse = async (prompt: string, context?: any) => {
  if (!API_KEY) return "AI Assistant is not configured. Please provide an API key.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const model = 'gemini-3-flash-preview';
    
    const systemInstruction = `
      You are the CelluHub Research Assistant. You help members of the Cellulose and Composite Research Group.
      Your tone is professional, scientific, and helpful. 
      You can assist with:
      1. Drafting purchase justifications for lab consumables.
      2. Summarizing complex research notes or meeting transcripts.
      3. Suggesting safety protocols for common chemicals (Cellulose, Epoxies, Solvents).
      4. Checking instrument availability logic (simulated).
      
      Context of current lab state: ${JSON.stringify(context || {})}
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with AI service.";
  }
};
