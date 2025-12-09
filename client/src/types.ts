
export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface SearchSource {
  title: string;
  uri: string;
}

export interface TeamMember {
  user: string; // ID
  role: 'Developer' | 'Designer' | 'Marketer' | 'Founder';
  joinedAt?: string;
}

export interface TrendMetrics {
  keyword: string;
  volume: number; // e.g. 3600
  growth: number; // e.g. 537 (percentage)
  history: number[]; // Array of numbers for the sparkline chart
}

export interface MarketAnalysis {
  tam: string; // Total Addressable Market e.g. "$50B+"
  targetSegment: string; // e.g. "~5M users"
  revenuePotential: string; // e.g. "$1M - $5M"
  marketGrowth: string; // e.g. "15-20% annually"
  painSeverity: number; // 0-100
  competitors: {
    name: string;
    website: string;
    description: string;
  }[];
}

export interface Idea {
  id: string;
  day: number;
  title: string;
  description: string; // Short summary
  fullContent: string; // Detailed markdown/text
  
  problem: string;
  solution: string;
  targetAudience: string;
  region: string;
  
  tags: string[];
  category: Category;
  votes: number;
  date: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  techStack?: string[];
  
  status: 'Open' | 'Building' | 'Shipped';
  comments: Comment[];
  author?: string; // ID of creator
  roast?: string; 
  
  // Team
  teamMembers?: TeamMember[]; 
  
  // User-specific state from backend
  isBookmarked: boolean;
  isVoted?: boolean;
  isJoined?: boolean;

  trendMetrics: TrendMetrics;
  marketAnalysis: MarketAnalysis;
  
  solutionType?: 'DFY' | 'DWY' | 'DIY';
  marketType?: 'B2B' | 'B2C';
  views?: number;
}

export enum Category {
  ALL = 'All',
  SAAS = 'SaaS',
  MOBILE = 'Mobile App',
  WEB = 'Web Tool',
  AI = 'AI/ML',
  GAME = 'Game',
  HARDWARE = 'Hardware',
  COMMUNITY = 'Community',
  MARKETPLACE = 'Marketplace',
  FINTECH = 'Fintech',
  EDUCATION = 'Education',
  HEALTH = 'Health & Wellness',
  BIO = 'Biotech', 
  SPACE = 'Spatial Computing'
}

export interface GeminiInsightData {
  feasibility: number; 
  competitors: string[];
  monetization: string[];
  mvpFeatures: string[];
  marketingSlogan: string;
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  sources?: SearchSource[];
}

export interface Badge {
    name: string;
    icon: string;
    description: string;
    date: string;
}

export interface User {
    id: string;
    _id?: string;
    email: string;
    name?: string;
    bio?: string;
    website?: string;
    token?: string;
    plan: 'free' | 'pro';
    role: 'user' | 'admin';
    aiCreditsUsed: number;
    reputation: number;
    badges: Badge[];
    followers?: string[];
    following?: string[];
}

export type ViewMode = 'grid' | 'list';
export type SortMode = 'newest' | 'trending' | 'discussed' | 'difficulty';
