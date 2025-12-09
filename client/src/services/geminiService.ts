
import axios from 'axios';
import { Idea, GeminiInsightData } from "../types";

const getAuthHeader = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        const token = JSON.parse(userInfo).token;
        return { headers: { Authorization: `Bearer ${token}` } };
    }
    return {};
};

export const generateInsight = async (idea: Idea): Promise<GeminiInsightData> => {
    const { data } = await axios.post('/api/ai/insight', {
        title: idea.title,
        description: idea.description
    }, getAuthHeader());
    return data;
};

export const generateDeepRoast = async (idea: Idea): Promise<string> => {
    const { data } = await axios.post('/api/ai/roast', {
        title: idea.title,
        description: idea.description
    }, getAuthHeader());
    return data.roast;
};

export const generateLaunchPlan = async (idea: Idea): Promise<string> => {
    const { data } = await axios.post('/api/ai/launch-plan', {
        title: idea.title,
        description: idea.description
    }, getAuthHeader());
    return data.plan;
};

export const generateRemix = async (idea: Idea): Promise<Idea> => {
    // Note: Remix endpoint is not yet fully implemented in backend in this batch, 
    // but the pattern would be similar. Returning mock for now to prevent breakage.
    return { ...idea, id: `remix-${Date.now()}`, title: `Remixed: ${idea.title}` };
};

export const generateNewIdeas = async (count: number, startDay: number, params: any): Promise<Idea[]> => {
    const { data } = await axios.post('/api/ai/generate', params, getAuthHeader());
    
    // Map backend response to Idea structure if needed, though backend currently matches it close enough
    return data.map((item: any, index: number) => ({
        ...item,
        id: `gen-${Date.now()}-${index}`,
        day: startDay + index + 1,
        votes: 0,
        date: new Date().toISOString().split('T')[0],
        status: 'Open',
        isBookmarked: false,
        comments: [],
        team: [],
        fullContent: `${item.problem}\n\n${item.solution}`
    }));
};
