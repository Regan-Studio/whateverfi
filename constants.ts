
import { Idea, Category } from './types';

// Helper to generate a random trend line
const genTrend = () => Array.from({length: 12}, () => Math.floor(Math.random() * 100) + 20).map((n, i) => n + (i*5));

export const INITIAL_IDEAS: Idea[] = [
  {
    id: '2025-01',
    day: 365,
    title: "CloudLit: Empowering Backup Champions",
    description: "A cloud storage management platform designed to guide users through personalized data backup plans utilizing existing services.",
    problem: "Files are scattered across multiple storage services. Late-night searches lead to chaos. Projects slip through fingers, and important documents vanish. Panic sets in with every missed deadline.",
    solution: "This platform calculates and tracks existing storage solutions. It creates personalized backup plans tailored to individual needs. Users can see their data's status and receive alerts for potential losses.",
    targetAudience: "Creative Professionals, Freelancers",
    region: "Global",
    fullContent: "See Problem/Solution sections.",
    tags: ['Cloud Storage', 'B2C', 'DWY'],
    category: Category.SAAS,
    votes: 1205,
    date: '2025-02-25',
    difficulty: 'Hard',
    techStack: ['AWS S3', 'React', 'Node.js'],
    status: 'Open',
    isBookmarked: false,
    comments: [],
    team: [{ role: 'Developer', count: 3 }],
    solutionType: 'DWY',
    marketType: 'B2C',
    trendMetrics: {
      keyword: "cloud backup solutions",
      volume: 1600,
      growth: 50,
      history: [20, 25, 30, 45, 40, 55, 60, 75, 80, 95, 100, 120]
    },
    marketAnalysis: {
      tam: "$50B+",
      targetSegment: "~5M users",
      revenuePotential: "$1M - $5M",
      marketGrowth: "15-20% annually",
      painSeverity: 82,
      competitors: [
        { name: "Backblaze", website: "backblaze.com", description: "Unlimited cloud backup solutions known for simplicity." },
        { name: "Carbonite", website: "carbonite.com", description: "Automatic backup solutions for small businesses." },
        { name: "Tresorit", website: "tresorit.com", description: "End-to-end encrypted workspace." }
      ]
    }
  },
  {
    id: '2025-02',
    day: 364,
    title: "Dream Recorder (EEG-to-Video)",
    description: "A headband and app using lightweight EEG sensors to reconstruct vague visuals from your REM sleep.",
    problem: "Dreams are fleeting and often forgotten within minutes of waking up. People lose access to their subconscious creativity and experiences.",
    solution: "A comfortable EEG headband tracks brainwave activity during REM sleep. AI models trained on visual cortex data reconstruct these signals into a low-res video 'dream reel' available every morning.",
    targetAudience: "Biohackers, Artists, Quantified Self enthusiasts",
    region: "North America",
    fullContent: "Visual reconstruction from fMRI is possible. This scales it down to consumer EEG.",
    tags: ['Biohacking', 'Hardware', 'GenAI'],
    category: Category.HARDWARE,
    votes: 980,
    date: '2025-01-14',
    difficulty: 'Hard',
    techStack: ['PyTorch', 'EEG Hardware', 'React Native'],
    status: 'Building',
    isBookmarked: false,
    comments: [],
    team: [{ role: 'Designer', count: 2 }],
    solutionType: 'DIY',
    marketType: 'B2C',
    trendMetrics: {
      keyword: "lucid dreaming tech",
      volume: 8500,
      growth: 120,
      history: [10, 12, 15, 18, 25, 40, 35, 60, 80, 90, 110, 140]
    },
    marketAnalysis: {
      tam: "$3B",
      targetSegment: "500k early adopters",
      revenuePotential: "$10M+",
      marketGrowth: "30% YoY",
      painSeverity: 40,
      competitors: [
          { name: "Muse", website: "choosemuse.com", description: "Meditation headband." },
          { name: "Halo", website: "propheticai.co", description: "Lucid dreaming headband." }
      ]
    }
  },
  {
    id: '2025-03',
    day: 363,
    title: "Collaborative Video Editing Marketplace",
    description: "A platform connecting video creators with expert editors, utilizing AI to enhance collaboration.",
    problem: "Creators struggle to find editors who match their style. The feedback loop is slow, involving messy timestamps in emails or generic file sharing tools.",
    solution: "A dedicated marketplace with a built-in frame-accurate review tool. AI suggests edits and matches creators with editors based on editing style analysis.",
    targetAudience: "YouTubers, Agencies",
    region: "Global",
    fullContent: "Streamlines the workflow from raw footage to final cut.",
    tags: ['Video Editing', 'Marketplace', 'AI'],
    category: Category.MARKETPLACE,
    votes: 2900,
    date: '2025-01-13',
    difficulty: 'Medium',
    techStack: ['FFmpeg', 'WebRTC', 'Next.js'],
    status: 'Open',
    isBookmarked: false,
    comments: [],
    solutionType: 'DWY',
    marketType: 'B2B',
    trendMetrics: {
      keyword: "AI video editing",
      volume: 12000,
      growth: 250,
      history: [40, 45, 60, 80, 100, 120, 150, 200, 180, 220, 250, 300]
    },
    marketAnalysis: {
      tam: "$100B",
      targetSegment: "Creator Economy",
      revenuePotential: "$50M",
      marketGrowth: "25% YoY",
      painSeverity: 75,
      competitors: []
    }
  },
  {
    id: '2025-04',
    day: 362,
    title: "Smart Browsing Assistant",
    description: "An AI-powered browser extension that helps users avoid distractions and provides suggestions.",
    problem: "Knowledge workers lose 40% of their day to context switching and doom scrolling.",
    solution: "An extension that understands your current task. If you navigate to Twitter while 'coding', it gently nudges you or summarizes the distraction to save time.",
    targetAudience: "Remote Workers, Students",
    region: "Global",
    fullContent: "Focus mode on steroids.",
    tags: ['Productivity', 'Browser Extension', 'AI'],
    category: Category.SAAS,
    votes: 30100,
    date: '2025-01-12',
    difficulty: 'Easy',
    techStack: ['Plasmo', 'OpenAI', 'React'],
    status: 'Open',
    isBookmarked: false,
    comments: [],
    solutionType: 'DIY',
    marketType: 'B2C',
    trendMetrics: {
      keyword: "productivity tools",
      volume: 301000,
      growth: -97,
      history: [100, 90, 85, 80, 70, 60, 50, 40, 30, 25, 20, 15]
    },
    marketAnalysis: {
      tam: "$85B",
      targetSegment: "Knowledge Workers",
      revenuePotential: "$5M",
      marketGrowth: "10%",
      painSeverity: 60,
      competitors: []
    }
  },
  {
    id: '2025-05',
    day: 361,
    title: "Micro-Biotome Custom Probiotics",
    description: "Send a sample, get a monthly 3D-printed probiotic pill tailored exactly to your gut deficiencies.",
    problem: "Generic probiotics are hit or miss. Most people don't know what specific bacteria they lack.",
    solution: "Sequencing-based subscription. We analyze your sample and 3D print a pill with the exact strains you need.",
    targetAudience: "Health conscious, Chronic illness",
    region: "Global",
    fullContent: "Personalized medicine for the gut.",
    tags: ['Health', 'Bio', 'DTC'],
    category: Category.BIO,
    votes: 640,
    date: '2025-01-11',
    difficulty: 'Hard',
    techStack: ['Bioinformatics', '3D Printing'],
    status: 'Open',
    isBookmarked: false,
    comments: [],
    solutionType: 'DFY',
    marketType: 'B2C',
    trendMetrics: {
      keyword: "gut health test",
      volume: 4500,
      growth: 85,
      history: [20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 110]
    },
    marketAnalysis: {
      tam: "$6B",
      targetSegment: "Wellness market",
      revenuePotential: "$20M",
      marketGrowth: "12%",
      painSeverity: 70,
      competitors: []
    }
  },
  {
    id: '2025-06',
    day: 360,
    title: "AI-Powered Sales Navigator",
    description: "A fully-automated platform that leverages AI to help sales professionals find and convert leads.",
    problem: "Sales Reps spend 60% of their time researching leads instead of selling.",
    solution: "Automates the entire SDR workflow. Finds leads, verifies emails, personalizes first touch, and schedules the meeting.",
    targetAudience: "B2B Sales Teams",
    region: "North America",
    fullContent: "The end of manual prospecting.",
    tags: ['Sales', 'AI', 'B2B'],
    category: Category.AI,
    votes: 3600,
    date: '2025-01-10',
    difficulty: 'Medium',
    techStack: ['Python', 'LinkedIn API', 'GPT-4'],
    status: 'Open',
    isBookmarked: false,
    comments: [],
    solutionType: 'DFY',
    marketType: 'B2B',
    trendMetrics: {
      keyword: "AI lead generation",
      volume: 3600,
      growth: 404,
      history: [10, 15, 20, 40, 80, 120, 200, 300, 400, 500, 600, 800]
    },
    marketAnalysis: {
      tam: "$12B",
      targetSegment: "SaaS Companies",
      revenuePotential: "$50M",
      marketGrowth: "35%",
      painSeverity: 90,
      competitors: []
    }
  }
];
