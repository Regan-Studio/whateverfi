

import { GoogleGenAI, Type } from "@google/genai";
import { Idea, Category, GeminiInsightData, SearchSource } from "../types";

const getClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("API_KEY is missing from environment variables");
    return new GoogleGenAI({ apiKey });
};

// helper to parse JSON
const extractJson = (text: string) => {
    try {
        // Try direct parse
        return JSON.parse(text);
    } catch (e) {
        // Try markdown block
        const match = text.match(/```json\s*([\s\S]*?)\s*```/);
        if (match && match[1]) return JSON.parse(match[1]);
        
        // Try finding array or object
        const firstOpenBrace = text.indexOf('{');
        const firstOpenBracket = text.indexOf('[');
        
        let start = -1;
        let end = -1;
        
        // Determine if we look for object or array based on which comes first
        if (firstOpenBrace !== -1 && (firstOpenBracket === -1 || firstOpenBrace < firstOpenBracket)) {
             start = firstOpenBrace;
             end = text.lastIndexOf('}');
        } else if (firstOpenBracket !== -1) {
             start = firstOpenBracket;
             end = text.lastIndexOf(']');
        }
        
        if (start !== -1 && end !== -1) {
            return JSON.parse(text.substring(start, end + 1));
        }
        throw new Error("Could not parse JSON from response");
    }
};

export const generateInsight = async (idea: Idea): Promise<GeminiInsightData> => {
  const ai = getClient();
  
  const prompt = `
    Research the following startup idea using Google Search:
    Title: ${idea.title}
    Description: ${idea.description}
    
    Return JSON:
    {
        "feasibility": number (0-100),
        "competitors": ["Competitor 1", "Competitor 2"], 
        "monetization": ["Model 1", "Model 2"],
        "mvpFeatures": ["Feature 1", "Feature 2", "Feature 3"],
        "marketingSlogan": "string",
        "swot": {
            "strengths": ["str1"],
            "weaknesses": ["weak1"],
            "opportunities": ["opp1"],
            "threats": ["threat1"]
        }
    }
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: { tools: [{ googleSearch: {} }] }
  });

  const text = response.text;
  if (!text) throw new Error("No response from Gemini");
  
  let data: GeminiInsightData;
  try {
      data = extractJson(text);
  } catch (e) {
      data = {
          feasibility: 50,
          competitors: ["Parsing Error"],
          monetization: [],
          mvpFeatures: [],
          marketingSlogan: "Error parsing response",
          swot: { strengths: [], weaknesses: [], opportunities: [], threats: [] }
      };
  }

  const sources: SearchSource[] = [];
  const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
  if (chunks) {
      chunks.forEach((chunk: any) => {
          if (chunk.web?.uri && chunk.web?.title) {
              sources.push({ title: chunk.web.title, uri: chunk.web.uri });
          }
      });
  }
  data.sources = sources;
  return data;
};

export const generateDeepRoast = async (idea: Idea): Promise<string> => {
    const ai = getClient();
    const prompt = `Act as a brutal Y Combinator partner. Analyze: ${idea.title}. Write a Pre-mortem. Why did it fail?`;
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: { thinkingConfig: { thinkingBudget: 1024 } }
    });
    return response.text || "Could not generate analysis.";
};

export const generatePivot = async (idea: Idea, roast: string): Promise<string> => {
    const ai = getClient();
    const prompt = `Suggest 3 Pivot strategies for ${idea.title} based on this critique: ${roast}`;
    const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
    return response.text || "Could not generate pivots.";
};

// FIX: Implement the function to parse the response and handle errors, ensuring it always returns a Promise<Idea>.
export const generateRemix = async (idea: Idea): Promise<Idea> => {
    const ai = getClient();
    const prompt = `Remix this idea: ${idea.title}. Return JSON matching original structure but with new industry.`;
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json"
            }
        });
        
        const text = response.text;
        if (text) {
            const newIdeaData = extractJson(text);
            return { ...idea, ...newIdeaData, id: `remix-${Date.now()}` };
        }
    } catch(e) {
        console.error("Error generating or parsing remix, returning mock.", e);
    }
    
    // Fallback mock return
    return { ...idea, id: `remix-${Date.now()}`, title: `Remixed: ${idea.title}` };
};


export const generateNewIdeas = async (count: number, startDay: number, params: any): Promise<Idea[]> => {
    const ai = getClient();

// FIX: Replaced TS types like `number` and `|` with plain strings in the prompt to avoid confusing the TypeScript parser.
    const prompt = `
        Generate ${count} innovative startup ideas based on these parameters:
        - Industry: ${params.industry}
        - User Type: ${params.userType || 'General'}
        - Idea Type: ${params.ideaType} (${params.ideaType === 'Novel' ? 'brand new concepts' : 'existing ideas with a unique twist'})
        - Market Size: ${params.marketSize}
        - Audience: ${params.audience}
        - Solution Type: ${params.solutionType}
        - Micro-SaaS Focus: ${params.microSaas ? 'Yes, focus on a very specific niche' : 'No, can be broader'}
        
        For each idea, provide a JSON object with the following structure. Do not include \`\`\`json markdown wrappers.
        {
          "title": "string",
          "description": "string (1-2 sentences)",
          "problem": "string (The core user pain point)",
          "solution": "string (How this idea solves the problem)",
          "targetAudience": "string",
          "region": "Global",
          "tags": ["string", "string", "string"],
          "category": "${params.industry}",
          "difficulty": "string, one of 'Easy', 'Medium', or 'Hard'",
          "techStack": ["string", "string"],
          "marketType": "${params.audience}",
          "solutionType": "${params.solutionType}",
          "trendMetrics": {
            "keyword": "string (a popular search term)",
            "volume": "number",
            "growth": "number (percentage, can be negative)",
            "history": ["array of 12 numbers"]
          },
          "marketAnalysis": {
            "tam": "string (e.g., '$10B')",
            "targetSegment": "string",
            "revenuePotential": "string",
            "marketGrowth": "string (e.g., '15% YoY')",
            "painSeverity": "number (0-100)",
            "competitors": [ { "name": "string", "website": "string", "description": "string" } ]
          }
        }
        Return a valid JSON array of these objects.
    `;
    
    const response = await ai.models.generateContent({
        model: 'gemini-flash-lite-latest',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            temperature: 0.8
        }
    });

// FIX: Changed response.text() to response.text as per Gemini API guidelines.
    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    try {
        const generatedIdeas = extractJson(text);
        
        return generatedIdeas.map((ideaData: any, index: number) => ({
            id: `gen-${Date.now()}-${index}`,
            day: startDay + index + 1,
            votes: 0,
            date: new Date().toISOString().split('T')[0],
            status: 'Open',
            isBookmarked: false,
            comments: [],
            team: [],
            fullContent: `${ideaData.problem}\n\n${ideaData.solution}`,
            ...ideaData,
        }));
    } catch (e) {
        console.error("Failed to parse generated ideas:", e);
        throw new Error("Failed to parse JSON from Gemini's response.");
    }
};