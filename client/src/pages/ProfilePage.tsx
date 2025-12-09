
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { User, Idea } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IdeaCard from '../components/IdeaCard';
import { User as UserIcon, MapPin, Link as LinkIcon, Trophy, Users } from 'lucide-react';
import { useToast } from '../components/Toast';

const ProfilePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { showToast } = useToast();
    const [profile, setProfile] = useState<User | null>(null);
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem('userInfo');
        if (stored) setCurrentUser(JSON.parse(stored));
        fetchProfile();
    }, [id]);

    const fetchProfile = async () => {
        try {
            const { data } = await axios.get(`/api/users/${id}`);
            setProfile(data);
            setIdeas(data.submittedIdeas || []);
        } catch (err) {
            showToast("Failed to load profile", 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleFollow = async () => {
        if (!currentUser) return window.location.href = '/login';
        try {
            const config = { headers: { Authorization: `Bearer ${currentUser.token}` } };
            await axios.post(`/api/users/${id}/follow`, {}, config);
            showToast("Followed!", 'success');
            fetchProfile(); // Refresh to update counts
        } catch (err) {
            showToast("Failed to follow", 'error');
        }
    };

    if (loading) return <div className="text-center py-20">Loading profile...</div>;
    if (!profile) return <div className="text-center py-20">User not found</div>;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
             <header className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="font-bold text-xl text-gray-900 cursor-pointer" onClick={() => window.location.href = '/'}>
                        whateverFi
                    </div>
                </div>
            </header>

            <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-shrink-0">
                            <div className="h-24 w-24 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-3xl font-bold">
                                {profile.avatar ? <img src={profile.avatar} className="h-24 w-24 rounded-full" /> : <UserIcon className="h-10 w-10" />}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.email.split('@')[0]}</h1>
                            <p className="text-gray-600 mb-4">{profile.bio || "No bio yet."}</p>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                                {profile.website && (
                                    <a href={profile.website} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-brand-600">
                                        <LinkIcon className="h-4 w-4" /> Website
                                    </a>
                                )}
                                <span className="flex items-center gap-1">
                                    <Trophy className="h-4 w-4 text-yellow-500" /> {profile.reputation} Rep
                                </span>
                                <span className="flex items-center gap-1">
                                    <Users className="h-4 w-4" /> {profile.followers?.length || 0} Followers
                                </span>
                            </div>

                            {currentUser?._id !== profile._id && (
                                <button 
                                    onClick={handleFollow}
                                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800"
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-6">Submitted Ideas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ideas.map(idea => (
                        <IdeaCard 
                            key={idea.id} 
                            idea={idea} 
                            onClick={()=>{}} 
                            onVote={()=>{}} 
                            onBookmark={()=>{}} 
                            onAnalyze={()=>{}} 
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;
