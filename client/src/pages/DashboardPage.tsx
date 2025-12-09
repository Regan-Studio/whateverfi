
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Idea } from '../types';
import IdeaCard from '../components/IdeaCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkeletonCard from '../components/SkeletonCard';
import { LayoutDashboard, Users, Bookmark, FileText } from 'lucide-react';
import { useToast } from '../components/Toast';

interface DashboardData {
    created: Idea[];
    joined: Idea[];
    bookmarked: Idea[];
    user: { email: string; id: string };
}

const DashboardPage: React.FC = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'joined' | 'created' | 'saved'>('joined');
    const { showToast } = useToast();

    useEffect(() => {
        const fetchDashboard = async () => {
            const token = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!).token : null;
            if (!token) {
                window.location.href = '/login';
                return;
            }

            try {
                const config = { headers: { Authorization: `Bearer ${token}` } };
                const res = await axios.get('/api/ideas/dashboard', config);
                setData(res.data);
            } catch (err) {
                showToast("Failed to load dashboard data", 'error');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, [showToast]);

    const renderIdeaList = (ideas: Idea[]) => {
        if (ideas.length === 0) {
            return (
                <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                    <p className="text-gray-500">No ideas found in this section.</p>
                </div>
            );
        }
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ideas.map(idea => (
                    <IdeaCard 
                        key={idea.id} 
                        idea={idea} 
                        onClick={() => {}} // Simple view, no modal logic for dashboard MVP
                        onVote={() => {}}
                        onBookmark={() => {}}
                        onAnalyze={() => {}}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
             <header className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
                        <LayoutDashboard className="h-6 w-6 text-brand-600" />
                        Mission Control
                    </div>
                    <a href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">Back to Feed</a>
                </div>
            </header>

            <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {loading ? (
                    <div className="grid gap-6 md:grid-cols-3">
                        <SkeletonCard /><SkeletonCard /><SkeletonCard />
                    </div>
                ) : data ? (
                    <>
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-900">Welcome, {data.user.email.split('@')[0]}</h1>
                            <p className="text-gray-500">Manage your startups and collaborations.</p>
                        </div>

                        <div className="flex gap-4 border-b border-gray-200 mb-6 overflow-x-auto">
                             <button 
                                onClick={() => setActiveTab('joined')}
                                className={`pb-3 px-4 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'joined' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                             >
                                <Users className="h-4 w-4" /> Joined Teams ({data.joined.length})
                             </button>
                             <button 
                                onClick={() => setActiveTab('created')}
                                className={`pb-3 px-4 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'created' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                             >
                                <FileText className="h-4 w-4" /> My Submissions ({data.created.length})
                             </button>
                             <button 
                                onClick={() => setActiveTab('saved')}
                                className={`pb-3 px-4 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'saved' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                             >
                                <Bookmark className="h-4 w-4" /> Saved ({data.bookmarked.length})
                             </button>
                        </div>

                        <div>
                            {activeTab === 'joined' && renderIdeaList(data.joined)}
                            {activeTab === 'created' && renderIdeaList(data.created)}
                            {activeTab === 'saved' && renderIdeaList(data.bookmarked)}
                        </div>
                    </>
                ) : (
                    <div className="text-center">Failed to load data.</div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default DashboardPage;
