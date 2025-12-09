
import React, { useState, useEffect } from 'react';
import { Idea, Comment, User } from '../types';
import { X, CheckCircle, AlertTriangle, Info, ExternalLink, Share2, Flag, Globe, Briefcase, Target, Layers, TrendingUp, Send, Flame, Rocket, UserPlus, Check, Sparkles, Lock } from 'lucide-react';
import { useToast } from './Toast';
import Markdown from './Markdown';
import axios from 'axios';
import { generateInsight, generateDeepRoast, generateLaunchPlan } from '../services/geminiService';
import { useNavigate } from 'react-router-dom';

interface IdeaModalProps {
  idea: Idea | null;
  allIdeas: Idea[];
  onClose: () => void;
  onAddComment: (ideaId: string, text: string) => void;
  onUpdateStatus: (ideaId: string, status: 'Open' | 'Building' | 'Shipped') => void;
  onSelectIdea: (idea: Idea) => void;
  initialTab?: 'overview' | 'insight';
  onUpdateIdea?: (idea: Idea) => void;
}

const DataCard = ({ label, value, subtext, color = "blue" }: { label: string, value: string, subtext?: string, color?: string }) => (
    <div className={`rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm ring-1 ring-${color}-50`}>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
        <p className={`mt-1 text-xl font-bold text-${color}-600`}>{value}</p>
        {subtext && <p className="mt-1 text-[10px] text-gray-400">{subtext}</p>}
    </div>
);

const PainSeverityGauge = ({ score }: { score: number }) => {
    const percentage = Math.max(0, Math.min(100, score));
    const color = percentage > 75 ? 'red' : percentage > 50 ? 'orange' : 'green';
    const rotation = (percentage / 100) * 180 - 90;

    return (
        <div className="relative w-full h-24 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex flex-col items-center justify-end p-4">
            <div 
                className={`absolute left-0 top-0 w-full h-full bg-gradient-to-t from-gray-200 to-transparent`}
                style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 50%, 0% 50%)' }}
            />
            <div 
                className={`absolute w-1/2 h-full left-0 top-0 origin-right transition-transform duration-500`}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className={`w-full h-full bg-gradient-to-b from-${color}-400 to-${color}-500`} />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-2xl font-bold text-${color}-600`}>{score}%</span>
                <span className="text-xs font-medium text-gray-500">Pain Severity</span>
            </div>
        </div>
    );
};

const ValidationCheckpoints = () => {
    const checkpoints = [
        "Market Demand Validation", "Willingness to Pay", "Distribution Channel",
        "Technical Feasibility", "Competitive Positioning", "Solution Approach"
    ];
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-gray-500 mb-4"><Check className="h-4 w-4" /> Validation Checkpoints</h4>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {checkpoints.map(c => (
                    <div key={c} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{c}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const IdeaModal: React.FC<IdeaModalProps> = ({ idea, onClose, onUpdateStatus, initialTab = 'overview', onUpdateIdea }) => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'insight' | 'roast' | 'plan' | 'discussion'>(initialTab);
  
  const [insightData, setInsightData] = useState<any>(null);
  const [roastData, setRoastData] = useState<string | null>(null);
  const [planData, setPlanData] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  
  const [loadingInsight, setLoadingInsight] = useState(false);
  const [loadingRoast, setLoadingRoast] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [joiningTeam, setJoiningTeam] = useState(false);
  const [limitReached, setLimitReached] = useState(false);

  // Derive initial status from prop
  const [localStatus, setLocalStatus] = useState(idea?.status || 'Open');
  const [isJoined, setIsJoined] = useState(idea?.isJoined || false);

  useEffect(() => {
      if (initialTab === 'insight' && !insightData && !loadingInsight && idea) {
          fetchInsight();
      }
      if (idea) {
          fetchComments();
      }
  }, [initialTab, idea]);

  const getAuthToken = () => {
      const userInfo = localStorage.getItem('userInfo');
      return userInfo ? JSON.parse(userInfo).token : null;
  };

  const handleAIError = (error: any) => {
      if (error.response?.status === 403 && error.response?.data?.code === 'LIMIT_REACHED') {
          setLimitReached(true);
          showToast("Free usage limit reached!", 'error');
      } else {
          showToast("Failed to generate content", 'error');
      }
  };

  const fetchComments = async () => {
      if (!idea) return;
      try {
          setLoadingComments(true);
          const { data } = await axios.get(`/api/comments/${idea.id}`);
          setComments(data);
      } catch (e) {
          console.error("Failed to load comments");
      } finally {
          setLoadingComments(false);
      }
  };

  const handlePostComment = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!idea || !newComment.trim()) return;
      
      const token = getAuthToken();
      if (!token) {
          showToast("Please login to comment", 'error');
          return;
      }

      try {
          const config = { headers: { Authorization: `Bearer ${token}` } };
          const { data } = await axios.post(`/api/comments/${idea.id}`, { text: newComment }, config);
          setComments([data, ...comments]);
          setNewComment('');
          showToast("Comment posted!", 'success');
      } catch (e) {
          showToast("Failed to post comment", 'error');
      }
  };

  const handleJoinTeam = async () => {
    if (!idea) return;
    const token = getAuthToken();
    if (!token) {
        showToast("Please login to join the team", 'error');
        return;
    }
    
    setJoiningTeam(true);
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const { data } = await axios.post(`/api/ideas/${idea.id}/join`, { role: 'Developer' }, config);
        
        setIsJoined(true);
        setLocalStatus(data.status);
        onUpdateStatus(idea.id, data.status);
        
        if (onUpdateIdea) {
             const updatedIdea = { ...idea, status: data.status, isJoined: true, teamMembers: data.teamMembers };
             onUpdateIdea(updatedIdea);
        }

        showToast("Welcome to the team! 🚀", 'success');
    } catch (e: any) {
        showToast(e.response?.data?.msg || "Failed to join team", 'error');
    } finally {
        setJoiningTeam(false);
    }
  };

  const fetchInsight = async () => {
      if (!idea) return;
      setLoadingInsight(true);
      try {
          const data = await generateInsight(idea);
          setInsightData(data);
      } catch (e: any) {
          handleAIError(e);
      } finally {
          setLoadingInsight(false);
      }
  };

  const fetchRoast = async () => {
      if (!idea) return;
      setLoadingRoast(true);
      try {
          const data = await generateDeepRoast(idea);
          setRoastData(data);
      } catch (e: any) {
          handleAIError(e);
      } finally {
          setLoadingRoast(false);
      }
  };

  const fetchPlan = async () => {
      if (!idea) return;
      setLoadingPlan(true);
      try {
          const data = await generateLaunchPlan(idea);
          setPlanData(data);
      } catch (e: any) {
          handleAIError(e);
      } finally {
          setLoadingPlan(false);
      }
  };

  if (!idea) return null;
  const isPositiveGrowth = idea.trendMetrics.growth >= 0;

  // Render Limit Reached Overlay
  const LimitOverlay = () => (
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm p-8 text-center">
          <div className="rounded-full bg-brand-100 p-4 mb-4">
              <Lock className="h-8 w-8 text-brand-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Upgrade to Unlock Insights</h3>
          <p className="text-gray-600 mb-6 max-w-sm">You've reached your free daily limit. Upgrade to Pro for unlimited Deep Dives, Roasts, and Launch Plans.</p>
          <button 
              onClick={() => { onClose(); navigate('/upgrade'); }}
              className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-brand-500 transition-all"
          >
              View Pro Plans
          </button>
      </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-gray-50 shadow-2xl ring-1 ring-gray-900/5 animate-slide-up">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-gray-200 flex items-start justify-between">
            <div>
                <div className="flex flex-wrap items-center gap-3 mb-2 text-xs text-gray-500">
                    <span className="font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">Type: {idea.category}</span>
                    <span>•</span>
                    <span className={`px-2 py-0.5 rounded ${localStatus === 'Open' ? 'bg-green-100 text-green-700' : localStatus === 'Building' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                        Status: {localStatus}
                    </span>
                    <span>•</span>
                    <span>Region: {idea.region}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">{idea.title}</h2>
                <div className="flex gap-4 mt-2 overflow-x-auto no-scrollbar">
                    <button onClick={() => setActiveTab('overview')} className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${activeTab === 'overview' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Overview</button>
                    <button onClick={() => { setActiveTab('insight'); if (!insightData && !limitReached) fetchInsight(); }} className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${activeTab === 'insight' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Deep Dive</button>
                    <button onClick={() => { setActiveTab('roast'); if (!roastData && !limitReached) fetchRoast(); }} className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${activeTab === 'roast' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Validator</button>
                    <button onClick={() => { setActiveTab('plan'); if (!planData && !limitReached) fetchPlan(); }} className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${activeTab === 'plan' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Launch Plan</button>
                    <button onClick={() => setActiveTab('discussion')} className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${activeTab === 'discussion' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Discussion ({comments.length})</button>
                </div>
            </div>
            <button onClick={onClose} className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <X className="h-5 w-5" />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 relative">
            {limitReached && (activeTab === 'insight' || activeTab === 'roast' || activeTab === 'plan') && <LimitOverlay />}
            
            {activeTab === 'overview' && (
                <div className="space-y-8">
                    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                         <h3 className="text-xl font-bold text-gray-900 mb-2">{idea.description}</h3>
                         <div className="flex gap-2 mt-4">
                             {idea.tags.map(tag => (
                                 <span key={tag} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">{tag}</span>
                             ))}
                         </div>
                    </section>

                    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                        <DataCard label="Total Market (TAM)" value={idea.marketAnalysis?.tam || "$1B+"} color="blue" />
                        <DataCard label="Target Segment" value={idea.marketAnalysis?.targetSegment || "N/A"} color="indigo" />
                        <DataCard label="Revenue Potential" value={idea.marketAnalysis?.revenuePotential || "N/A"} color="green" />
                        <DataCard label="Pain Score" value={(idea.marketAnalysis?.painSeverity || 50) + '/100'} color="red" />
                    </div>

                    <section className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                             <div className="flex items-center gap-2 mb-4">
                                 <div className="p-2 bg-red-50 rounded-lg"><AlertTriangle className="h-5 w-5 text-red-500" /></div>
                                 <h4 className="text-lg font-bold text-gray-900">The Problem</h4>
                             </div>
                             <p className="text-gray-600 text-sm leading-relaxed">{idea.problem || idea.fullContent}</p>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                             <div className="flex items-center gap-2 mb-4">
                                 <div className="p-2 bg-green-50 rounded-lg"><CheckCircle className="h-5 w-5 text-green-500" /></div>
                                 <h4 className="text-lg font-bold text-gray-900">The Solution</h4>
                             </div>
                             <p className="text-gray-600 text-sm leading-relaxed">{idea.solution}</p>
                        </div>
                    </section>
                    
                    <section className="grid md:grid-cols-2 gap-6">
                        <PainSeverityGauge score={idea.marketAnalysis.painSeverity} />
                        <ValidationCheckpoints />
                    </section>
                </div>
            )}

            {activeTab === 'insight' && !limitReached && (
                <div className="space-y-6">
                    {loadingInsight ? (
                        <div className="flex flex-col items-center justify-center h-64">
                            <Sparkles className="h-8 w-8 text-brand-500 animate-spin mb-4" />
                            <p className="text-gray-500">Analyzing market data...</p>
                        </div>
                    ) : insightData ? (
                        <>
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h3 className="font-bold text-lg mb-4">SWOT Analysis</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div><h4 className="text-green-600 font-bold text-sm mb-2">Strengths</h4><ul className="list-disc list-inside text-sm text-gray-600">{insightData.swot.strengths.map((s:any, i:number) => <li key={i}>{s}</li>)}</ul></div>
                                    <div><h4 className="text-red-600 font-bold text-sm mb-2">Weaknesses</h4><ul className="list-disc list-inside text-sm text-gray-600">{insightData.swot.weaknesses.map((s:any, i:number) => <li key={i}>{s}</li>)}</ul></div>
                                    <div><h4 className="text-blue-600 font-bold text-sm mb-2">Opportunities</h4><ul className="list-disc list-inside text-sm text-gray-600">{insightData.swot.opportunities.map((s:any, i:number) => <li key={i}>{s}</li>)}</ul></div>
                                    <div><h4 className="text-orange-600 font-bold text-sm mb-2">Threats</h4><ul className="list-disc list-inside text-sm text-gray-600">{insightData.swot.threats.map((s:any, i:number) => <li key={i}>{s}</li>)}</ul></div>
                                </div>
                            </div>
                             {insightData.sources && insightData.sources.length > 0 && (
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Sources</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {insightData.sources.map((s: any, i: number) => (
                                            <a key={i} href={s.uri} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline flex items-center gap-1 bg-white border border-gray-200 px-2 py-1 rounded">
                                                <Globe className="h-3 w-3" /> {s.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : <div className="text-center py-10">Failed to load insights.</div>}
                </div>
            )}

            {activeTab === 'roast' && !limitReached && (
                <div className="max-w-3xl mx-auto">
                    {loadingRoast ? (
                         <div className="flex flex-col items-center justify-center h-64">
                            <Flame className="h-8 w-8 text-red-500 animate-bounce mb-4" />
                            <p className="text-gray-500">The YC Partner is reviewing your pitch...</p>
                        </div>
                    ) : (
                        <div className="prose prose-sm max-w-none">
                            <Markdown content={roastData || "No roast available."} />
                        </div>
                    )}
                </div>
            )}

             {activeTab === 'plan' && !limitReached && (
                <div className="max-w-3xl mx-auto">
                    {loadingPlan ? (
                         <div className="flex flex-col items-center justify-center h-64">
                            <Rocket className="h-8 w-8 text-green-500 animate-pulse mb-4" />
                            <p className="text-gray-500">Drafting launch strategy...</p>
                        </div>
                    ) : (
                        <div className="prose prose-sm max-w-none">
                            <Markdown content={planData || "No plan available."} />
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'discussion' && (
                <div className="max-w-2xl mx-auto flex flex-col h-full">
                     <div className="flex-1 space-y-4 mb-6">
                        {loadingComments ? <p className="text-center text-gray-500">Loading comments...</p> : 
                         comments.length === 0 ? <p className="text-center text-gray-500 py-10">No discussion yet. Be the first!</p> :
                         comments.map(comment => (
                             <div key={comment.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                 <div className="flex justify-between items-center mb-2">
                                     <span className="font-bold text-sm text-gray-900">{comment.author}</span>
                                     <span className="text-xs text-gray-400">{comment.date ? new Date(comment.date).toLocaleDateString() : 'Just now'}</span>
                                 </div>
                                 <p className="text-sm text-gray-700">{comment.text}</p>
                             </div>
                         ))
                        }
                     </div>
                     <form onSubmit={handlePostComment} className="relative">
                         <input 
                            type="text" 
                            className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                            placeholder="Add to the discussion..."
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                         />
                         <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-600 rounded-full text-white hover:bg-brand-700">
                             <Send className="h-4 w-4" />
                         </button>
                     </form>
                </div>
            )}
        </div>

        {/* Footer Actions */}
        <div className="bg-white border-t border-gray-200 p-4 sm:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Flag className="h-4 w-4" /> Report</span>
                <span className="flex items-center gap-1"><Globe className="h-4 w-4" /> {idea.region}</span>
            </div>
            <div className="flex gap-3">
                {isJoined ? (
                    <button disabled className="rounded-lg px-4 py-2.5 bg-green-100 text-sm font-semibold text-green-700 flex items-center gap-2 cursor-default">
                        <Check className="h-4 w-4" /> Team Member
                    </button>
                ) : (
                    <button 
                        onClick={handleJoinTeam}
                        disabled={joiningTeam}
                        className="rounded-lg px-4 py-2.5 border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 shadow-sm flex items-center gap-2 disabled:opacity-70"
                    >
                        {joiningTeam ? 'Joining...' : <><UserPlus className="h-4 w-4" /> Join Team</>}
                    </button>
                )}
                
                <button className="rounded-lg px-6 py-2.5 bg-gray-900 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Validate & Build
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaModal;
