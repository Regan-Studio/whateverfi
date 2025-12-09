import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Idea, Category, Comment, SortMode } from '../types';
import Header from '../components/Header';
import IdeaCard from '../components/IdeaCard';
import Sidebar from '../components/Sidebar';
import RightPanel from '../components/RightPanel';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import IdeaModal from '../components/IdeaModal';
import SubmitIdeaModal from '../components/SubmitIdeaModal';
import StatsModal from '../components/StatsModal';
import GeneratorModal from '../components/GeneratorModal';
import SkeletonCard from '../components/SkeletonCard';
import { useToast } from '../components/Toast';
import { useAuth } from '../context/AuthContext';
import { generateNewIdeas } from '../services/geminiService';
import axios from 'axios';
import { Loader2, AlertCircle, TrendingUp, Calendar, MessageCircle, Gauge, SlidersHorizontal, RefreshCcw, SearchX } from 'lucide-react';

const HomePage: React.FC = () => {
  const { showToast } = useToast();
  const { user } = useAuth();
  const [ideas, setIdeas] = useState<Idea[]>([]);
  
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'home' | 'saved' | 'created'>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('newest');
  
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [initialModalTab, setInitialModalTab] = useState<'overview' | 'insight'>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const getAuthToken = () => user?.token;

  const fetchIdeas = useCallback(async () => {
      try {
          setIsLoading(true);
          const token = getAuthToken();
          const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
          const { data } = await axios.get('/api/ideas', config);
          setIdeas(data);
          setError(null);
      } catch (err) {
          setError('Failed to fetch ideas from the server. Please check your connection.');
          console.error(err);
      } finally {
          setIsLoading(false);
      }
  }, []);

  useEffect(() => {
      fetchIdeas();
  }, [fetchIdeas]);


  const filteredIdeas = useMemo(() => {
    let result = [...ideas];
    
    if (selectedCategory !== 'All') {
      result = result.filter(idea => idea.category === selectedCategory);
    }
    if (selectedDifficulty !== 'All') {
      result = result.filter(idea => idea.difficulty === selectedDifficulty);
    }
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(idea => 
        idea.title.toLowerCase().includes(lowerTerm) ||
        idea.description.toLowerCase().includes(lowerTerm) ||
        idea.tags.some(tag => tag.toLowerCase().includes(lowerTerm))
      );
    }
    if (viewMode === 'saved') {
        result = result.filter(idea => idea.isBookmarked);
    } else if (viewMode === 'created') {
        if (user) {
            const userId = user._id || user.id;
            result = result.filter(idea => idea.author === userId);
        } else {
            result = [];
        }
    }

    if (sortMode === 'trending') {
        result.sort((a, b) => b.votes - a.votes);
    } else if (sortMode === 'newest') {
        result.sort((a, b) => b.day - a.day);
    } else if (sortMode === 'discussed') {
        result.sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
    } else if (sortMode === 'difficulty') {
        const difficultyOrder: Record<string, number> = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        result.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
    }
    return result;
  }, [ideas, selectedCategory, selectedDifficulty, searchTerm, viewMode, sortMode, user]);

  const handleVote = useCallback(async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const token = getAuthToken();
    if (!token) {
        showToast('You must be logged in to vote.', 'error');
        return;
    }

    const originalIdeas = [...ideas];
    setIdeas(prev => prev.map(idea => {
        if (idea.id === id) {
            return {
                ...idea,
                isVoted: !idea.isVoted,
                votes: idea.isVoted ? idea.votes - 1 : idea.votes + 1
            };
        }
        return idea;
    }));

    try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.put(`/api/ideas/${id}/vote`, {}, config);
    } catch (err) {
        showToast('Failed to vote. Please try again.', 'error');
        setIdeas(originalIdeas);
    }
  }, [ideas, showToast]);
  
  const handleBookmark = useCallback(async (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      const token = getAuthToken();
      if (!token) {
          showToast('You must be logged in to save ideas.', 'error');
          return;
      }
      
      const originalIdeas = [...ideas];
      setIdeas(prev => prev.map(idea => {
          if (idea.id === id) {
              showToast(!idea.isBookmarked ? "Saved to collection" : "Removed from collection", 'info');
              return { ...idea, isBookmarked: !idea.isBookmarked };
          }
          return idea;
      }));

      try {
          const config = { headers: { Authorization: `Bearer ${token}` } };
          await axios.put(`/api/ideas/${id}/bookmark`, {}, config);
      } catch (err) {
          showToast('Failed to update bookmark. Please try again.', 'error');
          setIdeas(originalIdeas);
      }
  }, [ideas, showToast]);

  const handleQuickGenerate = () => setIsGeneratorOpen(true);
  
  const handleSelectIdea = (idea: Idea) => {
      setInitialModalTab('overview');
      setSelectedIdea(idea);
  };

  const handleAnalyze = (idea: Idea, e: React.MouseEvent) => {
      e.stopPropagation();
      setInitialModalTab('insight');
      setSelectedIdea(idea);
  };

  const handleGenerateWithParams = async (params: any) => {
      // Logic for AI generation
  };

  const handleSubmitIdea = async (data: any) => {
      // Logic for submitting new ideas
  };

  const handleIdeaUpdate = (updatedIdea: Idea) => {
    setIdeas(prev => prev.map(idea => (idea.id === updatedIdea.id ? updatedIdea : idea)));
    setSelectedIdea(updatedIdea);
  };

  // Dummy handlers to satisfy props
  const handleAddComment = () => {};
  const handleUpdateStatus = () => {};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header 
        searchTerm={searchTerm} 
        onSearch={setSearchTerm} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        onSelectDifficulty={setSelectedDifficulty}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onOpenSubmit={() => setIsSubmitModalOpen(true)}
        onOpenStats={() => setIsStatsModalOpen(true)}
      />

      <div className="mx-auto w-full max-w-screen-2xl flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex py-6 lg:gap-10">
            
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
            
            <main className="flex-1 min-w-0">
                 {viewMode === 'home' && !searchTerm && selectedCategory === 'All' && (
                    <Hero onGenerate={handleQuickGenerate} isGenerating={isGenerating} />
                 )}

                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            {viewMode === 'saved' ? 'Saved Collection' : viewMode === 'created' ? 'My Ideas' : (selectedCategory === 'All' ? 'Fresh Ideas' : `${selectedCategory} Ideas`)}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {filteredIdeas.length} ideas found
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500 mr-2">
                            <SlidersHorizontal className="h-3 w-3" /> Sort by:
                        </div>
                        <div className="flex rounded-lg bg-white p-1 shadow-sm ring-1 ring-gray-200">
                            <button onClick={() => setSortMode('newest')} className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${sortMode === 'newest' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}> <Calendar className="h-3 w-3" /> New </button>
                            <button onClick={() => setSortMode('trending')} className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${sortMode === 'trending' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}> <TrendingUp className="h-3 w-3" /> Hot </button>
                            <button onClick={() => setSortMode('discussed')} className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${sortMode === 'discussed' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}> <MessageCircle className="h-3 w-3" /> Chat </button>
                            <button onClick={() => setSortMode('difficulty')} className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${sortMode === 'difficulty' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}> <Gauge className="h-3 w-3" /> Level </button>
                        </div>
                    </div>
                </div>
                 
                  <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-2">
                        {isLoading ? (
                            Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
                        ) : error ? (
                             <div className="col-span-full mb-6 flex flex-col items-center justify-center gap-4 rounded-lg bg-red-50 p-8 text-center text-sm text-red-700 ring-1 ring-red-600/10">
                                <AlertCircle className="h-5 w-5" />
                                <span>{error}</span>
                                <button onClick={fetchIdeas} className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-xs font-bold text-red-700 hover:bg-red-200 transition-colors"> <RefreshCcw className="h-3 w-3" /> Retry </button>
                            </div>
                        ) : filteredIdeas.length === 0 ? (
                            <div className="col-span-full flex h-96 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-white p-12 text-center">
                                <SearchX className="h-8 w-8 text-gray-400 mb-4" />
                                <h3 className="mt-2 text-lg font-semibold text-gray-900">No ideas found</h3>
                                <p className="mt-1 text-sm text-gray-500 max-w-xs mx-auto">Try adjusting your search terms, category filters, or generate new ones with AI.</p>
                                <button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setViewMode('home'); }} className="mt-6 text-sm font-semibold text-brand-600 hover:underline"> Clear Filters </button>
                            </div>
                        ) : (
                            filteredIdeas.map(idea => (
                                <IdeaCard 
                                    key={idea.id} 
                                    idea={idea} 
                                    onClick={handleSelectIdea}
                                    onVote={handleVote}
                                    onBookmark={handleBookmark}
                                    onAnalyze={handleAnalyze}
                                />
                            ))
                        )}
                    </div>
            </main>
            
            <aside className="hidden xl:block xl:w-80 xl:flex-shrink-0">
                <div className="sticky top-24">
                    <RightPanel ideas={ideas} />
                </div>
            </aside>

        </div>
      </div>

      <Footer />

      {selectedIdea && (
        <IdeaModal 
            idea={selectedIdea}
            allIdeas={ideas} 
            onClose={() => setSelectedIdea(null)} 
            onAddComment={handleAddComment}
            onUpdateStatus={handleUpdateStatus}
            onSelectIdea={setSelectedIdea}
            initialTab={initialModalTab}
            onUpdateIdea={handleIdeaUpdate}
        />
      )}

      {isSubmitModalOpen && ( <SubmitIdeaModal onClose={() => setIsSubmitModalOpen(false)} onSubmit={handleSubmitIdea} /> )}
      {isStatsModalOpen && ( <StatsModal ideas={ideas} onClose={() => setIsStatsModalOpen(false)} /> )}
      {isGeneratorOpen && ( <GeneratorModal onClose={() => setIsGeneratorOpen(false)} onGenerate={handleGenerateWithParams} isGenerating={isGenerating} /> )}
    </div>
  );
};

export default HomePage;
