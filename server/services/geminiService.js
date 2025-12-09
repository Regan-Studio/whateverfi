
const { GoogleGenAI } = require("@google/genai");

const getClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("API_KEY is missing from environment variables");
    return new GoogleGenAI({ apiKey });
};

// Helper to sanitize and parse JSON from AI response
const extractJson = (text) => {
    try {
        return JSON.parse(text);
    } catch (e) {
        const match = text.match(/```json\s*([\s\S]*?)\s*```/);
        if (match && match[1]) return JSON.parse(match[1]);
        
        const firstOpenBrace = text.indexOf('{');
        const lastCloseBrace = text.lastIndexOf('}');
        if (firstOpenBrace !== -1 && lastCloseBrace !== -1) {
            return JSON.parse(text.substring(firstOpenBrace, lastCloseBrace + 1));
        }
        return null;
    }
};

const aiService = {
    /**
     * Agentic Pattern: Tool Use (Chapter 5)
     * Uses Google Search to ground the idea in real-world data.
     */
    generateInsight: async (title, description) => {
        const ai = getClient();
        const prompt = `
            Analyze this startup idea: "${title}: ${description}".
            Use Google Search to find real competitors and market trends.
            
            Return a JSON object with:
            - feasibility (0-100 score)
            - competitors (list of strings)
            - monetization (list of models)
            - mvpFeatures (list of core features)
            - marketingSlogan (string)
            - swot (object with arrays for strengths, weaknesses, opportunities, threats)
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: { tools: [{ googleSearch: {} }] }
        });

        const text = response.text || "{}";
        const data = extractJson(text) || {};
        
        // Extract grounding metadata (sources)
        const sources = [];
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (chunks) {
            chunks.forEach(chunk => {
                if (chunk.web?.uri && chunk.web?.title) {
                    sources.push({ title: chunk.web.title, uri: chunk.web.uri });
                }
            });
        }
        
        return { ...data, sources };
    },

    /**
     * Agentic Pattern: Persona Prompting (Appendix A) & Reflection (Chapter 4)
     * Acts as a critical critic to stress-test the idea.
     */
    generateRoast: async (title, description) => {
        const ai = getClient();
        const prompt = `
            You are a brutal, cynical Y Combinator partner. 
            Analyze this startup idea: "${title}: ${description}".
            Perform a "Pre-mortem". Why will this fail? Be specific, harsh, and direct.
            Don't use fluff. Focus on market saturation, unit economics, and distribution.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview', // Using Pro for deeper reasoning
            contents: prompt,
            // Agentic Pattern: Reasoning (Chapter 17) - allocating budget for thought
            config: { thinkingConfig: { thinkingBudget: 1024 } } 
        });

        return response.text;
    },

    /**
     * Agentic Pattern: Chain-of-Thought (Chapter 17)
     * Breaks down the execution into logical steps.
     */
    generateLaunchPlan: async (title, description) => {
        const ai = getClient();
        const prompt = `
            Create a step-by-step launch plan for: "${title}: ${description}".
            
            Think step-by-step:
            1. Identify the target niche.
            2. Define the MVP scope.
            3. Determine the go-to-market strategy.
            4. Outline the first 30 days of execution.
            
            Format the output in clean Markdown.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt
        });

        return response.text;
    },

    /**
     * Agentic Pattern: Exploration and Discovery (Chapter 21)
     * Generates novel ideas based on constraints.
     */
    generateNewIdeas: async (params) => {
        const ai = getClient();
        const prompt = `
            Generate 3 innovative startup ideas based on:
            Industry: ${params.industry}
            User Type: ${params.userType || 'General'}
            Type: ${params.ideaType}
            
            Return a JSON array of objects. Each object must have:
            title, description, problem, solution, targetAudience, region, tags (array), 
            category, difficulty (Easy/Medium/Hard), techStack (array), marketType (B2B/B2C),
            solutionType (DIY/DWY/DFY).
            
            Also include 'trendMetrics' object (keyword, volume, growth, history array) and 
            'marketAnalysis' object (tam, targetSegment, revenuePotential, marketGrowth, painSeverity, competitors array).
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-flash-lite-latest', // Fast model for generation
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });

        const text = response.text || "[]";
        return extractJson(text) || [];
    }
};

module.exports = aiService;
