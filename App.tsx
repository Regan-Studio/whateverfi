
import React, { useState, useEffect, useMemo } from 'react';
import { Idea, Category, Comment, SortMode } from './types';
import Header from './components/Header';
import IdeaCard from './components/IdeaCard';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Hero from './components/Hero';
import Footer from './components/Footer';
import IdeaModal from './components/IdeaModal';
import SubmitIdeaModal from './components/SubmitIdeaModal';
import StatsModal from './components/StatsModal';
import GeneratorModal from './components/GeneratorModal';
import SkeletonCard from './components/SkeletonCard';
import { ToastProvider, useToast } from './components/Toast';
import { generateNewIdeas } from './services/geminiService';
import { storageService } from './services/storage';
import { Loader2, AlertCircle, TrendingUp, Calendar, MessageCircle, Gauge, SlidersHorizontal } from 'lucide-react';

// Main Inner App component to use hooks
const InnerApp: React.FC = () => {
  const { showToast } = useToast();
  const [ideas, setIdeas] = useState<Idea[]>([]);
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [viewMode, setViewMode] = useState<'home' | 'saved'>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('newest');
  
  // UI States
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [initialModalTab, setInitialModalTab] = useState<'overview' | 'insight'>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  
  // Generation State
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load Initial Data
  useEffect(() => {
    setIdeas(storageService.getIdeas());
  }, []);

  // Persist Data on Change
  useEffect(() => {
    if (ideas.length > 0) {
        storageService.saveIdeas(ideas);
    }
  }, [ideas]);

  // Main Filtering & Sorting Logic - Optimized with useMemo
  const filteredIdeas = useMemo(() => {
    let result = [...ideas];

    // 1. Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(idea => idea.category === selectedCategory);
    }

    // 2. Filter by Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(idea => 
        idea.title.toLowerCase().includes(lowerTerm) ||
        idea.description.toLowerCase().includes(lowerTerm) ||
        idea.tags.some(tag => tag.toLowerCase().includes(lowerTerm))
      );
    }

    // 3. Filter by View Mode (Saved vs Home)
    if (viewMode === 'saved') {
        result = result.filter(idea => idea.isBookmarked);
    }

    // 4. Sorting
    if (sortMode === 'trending') {
        result.sort((a, b) => b.votes - a.votes);
    } else if (sortMode === 'newest') {
        result.sort((a, b) => b.day - a.day);
    } else if (sortMode === 'discussed') {
        result.sort((a, b) => b.comments.length - a.comments.length);
    } else if (sortMode === 'difficulty') {
        const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        result.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
    }

    return result;
  }, [ideas, selectedCategory, searchTerm, viewMode, sortMode]);

  // --- Actions ---

  const handleGenerateWithParams = async (params: any) => {
    setIsGenerating(true);
    setError(null);
    setIsGeneratorOpen(false); // Close modal to show loading on main screen or keep it open? Let's close and show toast
    showToast("AI is brainstorming based on your criteria...", 'info');
    
    try {
      const maxDay = Math.max(...ideas.map(i => i.day), 0);
      const newIdeas = await generateNewIdeas(3, maxDay, params);
      if (newIdeas.length > 0) {
          setIdeas(prev => [...newIdeas, ...prev]);
          showToast("3 tailored ideas generated!", 'success');
      } else {
          setError("Gemini returned no ideas. Try again.");
          showToast("Failed to generate", 'error');
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate ideas. Ensure API Key is configured.");
      showToast("API Error", 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  // Default simple generation
  const handleQuickGenerate = () => {
      setIsGeneratorOpen(true);
  };

  const handleVote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIdeas(prev => prev.map(idea => {
        if (idea.id === id) {
             showToast(`Voted for ${idea.title}`, 'success');
             return { ...idea, votes: idea.votes + 1 };
        }
        return idea;
    }));
  };

  const handleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIdeas(prev => prev.map(idea => {
        if (idea.id === id) {
            const newVal = !idea.isBookmarked;
            showToast(newVal ? "Saved to collection" : "Removed from collection", 'info');
            return { ...idea, isBookmarked: newVal };
        }
        return idea;
    }));
  };

  const handleAnalyze = (idea: Idea, e: React.MouseEvent) => {
    e.stopPropagation();
    setInitialModalTab('insight');
    setSelectedIdea(idea);
  };

  const handleSelectIdea = (idea: Idea) => {
    setInitialModalTab('overview');
    setSelectedIdea(idea);
  };

  const handleAddComment = (ideaId: string, text: string) => {
    const newComment: Comment = {
        id: `c-${Date.now()}`,
        author: 'You',
        text,
        date: new Date().toISOString().split('T')[0]
    };
    
    setIdeas(prev => prev.map(idea => {
        if (idea.id === ideaId) {
            const updated = { ...idea, comments: [newComment, ...idea.comments] };
            if (selectedIdea?.id === ideaId) setSelectedIdea(updated);
            return updated;
        }
        return idea;
    }));
  };

  const handleUpdateStatus = (ideaId: string, status: 'Open' | 'Building' | 'Shipped') => {
      setIdeas(prev => prev.map(idea => {
          if (idea.id === ideaId) {
              const updated = { ...idea, status };
              if (selectedIdea?.id === ideaId) setSelectedIdea(updated);
              return updated;
          }
          return idea;
      }));
  };

  const handleSubmitIdea = (data: any) => {
      const maxDay = Math.max(...ideas.map(i => i.day), 0);
      // For manually submitted ideas, we create mock metrics for now
      const newIdea: Idea = {
          id: `user-${Date.now()}`,
          day: maxDay + 1,
          title: data.title,
          description: data.description,
          fullContent: data.description,
          problem: data.description,
          solution: "Community submitted solution.",
          targetAudience: "General",
          region: "Global",
          tags: data.tags,
          category: data.category,
          votes: 0,
          date: new Date().toISOString().split('T')[0],
          difficulty: data.difficulty,
          techStack: data.techStack,
          status: 'Open',
          isBookmarked: false,
          comments: [],
          team: [],
          trendMetrics: {
              keyword: data.title,
              volume: 100,
              growth: 0,
              history: [0,0,0,0,0,0,0,0,0,0,0,10]
          },
          marketAnalysis: {
              tam: "TBD",
              targetSegment: "TBD",
              revenuePotential: "TBD",
              marketGrowth: "TBD",
              painSeverity: 50,
              competitors: []
          }
      };
      setIdeas(prev => [newIdea, ...prev]);
      setIsSubmitModalOpen(false);
      showToast("Your idea has been submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header 
        searchTerm={searchTerm} 
        onSearch={setSearchTerm} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onOpenSubmit={() => setIsSubmitModalOpen(true)}
        onOpenStats={() => setIsStatsModalOpen(true)}
      />

      <div className="mx-auto w-full max-w-screen-2xl flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex py-6 lg:gap-10">
            
            {/* Left Sidebar (Desktop) */}
            <aside className="hidden lg:block lg:w-60 lg:flex-shrink-0 xl:w-72">
                <div className="sticky top-24">
                    <Sidebar 
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                        viewMode={viewMode}
                        onChangeView={setViewMode}
                    />
                </div>
            </aside>

            {/* Mobile Sidebar Drawer */}
            {isSidebarOpen && (
                 <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
                    <div className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white p-6 shadow-xl">
                        <Sidebar 
                            selectedCategory={selectedCategory}
                            onSelectCategory={(c) => { setSelectedCategory(c); setIsSidebarOpen(false); }}
                            viewMode={viewMode}
                            onChangeView={(v) => { setViewMode(v); setIsSidebarOpen(false); }}
                        />
                    </div>
                 </div>
            )}

            {/* Main Feed */}
            <main className="flex-1 min-w-0">
                {viewMode === 'home' && !searchTerm && !selectedCategory.includes('All') === false && (
                    <Hero onGenerate={handleQuickGenerate} isGenerating={isGenerating} />
                )}

                {/* Main Content Header */}
                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            {viewMode === 'saved' ? 'Saved Collection' : (selectedCategory === 'All' ? 'Fresh Ideas' : `${selectedCategory} Ideas`)}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {filteredIdeas.length} ideas found
                        </p>
                    </div>

                    {/* Sort Controls */}
                    <div className="flex items-center gap-2">
                        <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500 mr-2">
                            <SlidersHorizontal className="h-3 w-3" /> Filter by:
                        </div>
                        <div className="flex rounded-lg bg-white p-1 shadow-sm ring-1 ring-gray-200">
                            <button 
                                onClick={() => setSortMode('newest')}
                                className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${sortMode === 'newest' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                <Calendar className="h-3 w-3" /> New
                            </button>
                            <button 
                                onClick={() => setSortMode('trending')}
                                className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${sortMode === 'trending' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                <TrendingUp className="h-3 w-3" /> Hot
                            </button>
                            <button 
                                onClick={() => setSortMode('discussed')}
                                className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${sortMode === 'discussed' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                <MessageCircle className="h-3 w-3" /> Chat
                            </button>
                            <button 
                                onClick={() => setSortMode('difficulty')}
                                className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${sortMode === 'difficulty' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                <Gauge className="h-3 w-3" /> Level
                            </button>
                        </div>
                    </div>
                </div>

                {/* Error Banner */}
                {error && (
                    <div className="mb-6 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-600/10">
                        <AlertCircle className="h-5 w-5" />
                        {error}
                    </div>
                )}

                {/* Grid */}
                {filteredIdeas.length === 0 ? (
                    <div className="flex h-96 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-white p-12 text-center">
                        <div className="rounded-full bg-gray-100 p-4 mb-4">
                             <Loader2 className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-gray-900">No ideas found</h3>
                        <p className="mt-1 text-sm text-gray-500 max-w-xs mx-auto">Try adjusting your search terms, category filters, or generate new ones with AI.</p>
                        <button 
                            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setViewMode('home'); }}
                            className="mt-6 text-sm font-semibold text-brand-600 hover:underline"
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-2">
                        {isGenerating && (
                            <>
                                <SkeletonCard />
                                <SkeletonCard />
                            </>
                        )}
                        {filteredIdeas.map(idea => (
                            <IdeaCard 
                                key={idea.id} 
                                idea={idea} 
                                onClick={handleSelectIdea}
                                onVote={handleVote}
                                onBookmark={handleBookmark}
                                onAnalyze={handleAnalyze}
                            />
                        ))}
                    </div>
                )}
                
                {/* Load More Trigger (Visual Only) */}
                {filteredIdeas.length > 0 && (
                    <div className="mt-12 flex justify-center">
                        <button 
                            onClick={handleQuickGenerate} 
                            disabled={isGenerating}
                            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all"
                        >
                            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <TrendingUp className="h-4 w-4" />}
                            {isGenerating ? 'Mining Ideas...' : 'Generate & Load More'}
                        </button>
                    </div>
                )}
            </main>

            {/* Right Panel (Desktop) */}
            <aside className="hidden xl:block xl:w-80 xl:flex-shrink-0">
                <div className="sticky top-24">
                    <RightPanel ideas={ideas} />
                </div>
            </aside>

        </div>
      </div>

      <Footer />

      {/* Modals */}
      {selectedIdea && (
        <IdeaModal 
            idea={selectedIdea}
            allIdeas={ideas} 
            onClose={() => setSelectedIdea(null)} 
            onAddComment={handleAddComment}
            onUpdateStatus={handleUpdateStatus}
            onSelectIdea={setSelectedIdea}
            initialTab={initialModalTab}
        />
      )}

      {isSubmitModalOpen && (
        <SubmitIdeaModal 
            onClose={() => setIsSubmitModalOpen(false)}
            onSubmit={handleSubmitIdea}
        />
      )}

      {isStatsModalOpen && (
        <StatsModal 
            ideas={ideas}
            onClose={() => setIsStatsModalOpen(false)}
        />
      )}

      {isGeneratorOpen && (
          <GeneratorModal 
            onClose={() => setIsGeneratorOpen(false)}
            onGenerate={handleGenerateWithParams}
            isGenerating={isGenerating}
          />
      )}
    </div>
  );
};

const App: React.FC = () => {
    return (
        <ToastProvider>
            <InnerApp />
        </ToastProvider>
    );
}

export default App;
