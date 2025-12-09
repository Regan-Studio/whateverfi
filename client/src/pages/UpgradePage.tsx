
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CheckCircle, Zap, Shield, Rocket } from 'lucide-react';
import { useToast } from '../components/Toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UpgradePage: React.FC = () => {
    const { showToast } = useToast();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleUpgrade = async () => {
        const userInfo = localStorage.getItem('userInfo');
        if (!userInfo) {
            navigate('/login');
            return;
        }

        const { token } = JSON.parse(userInfo);
        setIsLoading(true);

        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.post('/api/payment/upgrade', {}, config);
            
            // Update local user info with new plan details
            const currentUser = JSON.parse(userInfo);
            const updatedUser = { 
                ...currentUser, 
                plan: data.user.plan, 
                aiCreditsUsed: data.user.aiCreditsUsed 
            };
            localStorage.setItem('userInfo', JSON.stringify(updatedUser));
            
            showToast("Welcome to Pro! 🚀", 'success');
            navigate('/');
        } catch (err) {
            showToast("Upgrade failed. Please try again.", 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
             <header className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="font-bold text-xl text-gray-900 cursor-pointer" onClick={() => navigate('/')}>
                        whateverFi
                    </div>
                </div>
            </header>

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Unlock Your Startup Potential</h1>
                    <p className="mt-4 text-xl text-gray-500">Choose the plan that fits your ambition. Ship faster with AI.</p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Free Plan */}
                    <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Explorer</h3>
                            <p className="text-gray-500 text-sm">For casual browsing and light research.</p>
                        </div>
                        <div className="my-6">
                            <span className="text-4xl font-bold text-gray-900">$0</span>
                            <span className="text-gray-500">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-gray-600">
                                <CheckCircle className="h-5 w-5 text-gray-400" />
                                Browse unlimited ideas
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <CheckCircle className="h-5 w-5 text-gray-400" />
                                5 AI Insight credits / month
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <CheckCircle className="h-5 w-5 text-gray-400" />
                                Join public teams
                            </li>
                        </ul>
                        <button disabled className="w-full rounded-xl bg-gray-100 py-3 text-sm font-semibold text-gray-400 cursor-default">
                            Current Plan
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative rounded-2xl bg-gray-900 border border-gray-800 p-8 shadow-2xl flex flex-col">
                        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            POPULAR
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-white">Founder Pro</h3>
                            <p className="text-gray-400 text-sm">For serious builders and researchers.</p>
                        </div>
                        <div className="my-6">
                            <span className="text-4xl font-bold text-white">$29</span>
                            <span className="text-gray-400">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                             <li className="flex items-center gap-3 text-gray-300">
                                <Rocket className="h-5 w-5 text-brand-400" />
                                <strong>Unlimited</strong> AI Insights & Roasts
                            </li>
                             <li className="flex items-center gap-3 text-gray-300">
                                <Zap className="h-5 w-5 text-brand-400" />
                                Access to Gemini 1.5 Pro Model
                            </li>
                             <li className="flex items-center gap-3 text-gray-300">
                                <Shield className="h-5 w-5 text-brand-400" />
                                Private Idea Generation
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="h-5 w-5 text-brand-400" />
                                Priority Support
                            </li>
                        </ul>
                        <button 
                            onClick={handleUpgrade}
                            disabled={isLoading}
                            className="w-full rounded-xl bg-brand-600 py-3 text-sm font-bold text-white hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/25"
                        >
                            {isLoading ? 'Processing...' : 'Upgrade Now'}
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UpgradePage;
