
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI client directly using the environment variable.
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const fetchRestaurantLatestInfo = async () => {
  try {
    const ai = getAIClient();
    // Using precise coordinates for QD Restaurant, GTB Nagar provided by the user
    const QD_LAT = 28.695183;
    const QD_LNG = 77.204251;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Provide the latest status for QD Restaurant in GTB Nagar (Hudson Lane), New Delhi, which is located beside Uttam Chai. Mention current crowd levels, any today-special deals, and confirm the specific landmark nearby.",
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: { latitude: QD_LAT, longitude: QD_LNG }
          }
        }
      },
    });

    return {
      text: response.text,
      groundingChunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Error fetching info:", error);
    return null;
  }
};
