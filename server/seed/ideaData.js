
// Adapted from the original constants.ts
const ideas = [
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
    category: 'SaaS',
    votes: 1205,
    date: '2025-02-25',
    difficulty: 'Hard',
    techStack: ['AWS S3', 'React', 'Node.js'],
    status: 'Open',
    isBookmarked: false,
    comments: [],
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
    category: 'Hardware',
    votes: 980,
    date: '2025-01-14',
    difficulty: 'Hard',
    techStack: ['PyTorch', 'EEG Hardware', 'React Native'],
    status: 'Building',
    isBookmarked: false,
    comments: [],
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
    category: 'AI/ML',
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

module.exports = ideas;
