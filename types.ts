
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
  role: 'Developer' | 'Designer' | 'Marketer' | 'Founder';
  count: number;
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
  
  // Deep Dive Content
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
  
  // New Features for MVP
  status: 'Open' | 'Building' | 'Shipped';
  isBookmarked: boolean;
  comments: Comment[];
  author?: string;
  roast?: string; // Validated by Pro model
  team?: TeamMember[]; // Team building
  
  // Analytics
  trendMetrics: TrendMetrics;
  marketAnalysis: MarketAnalysis;
  
  // Metadata
  solutionType?: 'DFY' | 'DWY' | 'DIY'; // Done For You, Done With You, Do It Yourself
  marketType?: 'B2B' | 'B2C';
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
  feasibility: number; // 0-100
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

export type ViewMode = 'grid' | 'list';
export type SortMode = 'newest' | 'trending' | 'discussed' | 'difficulty';
