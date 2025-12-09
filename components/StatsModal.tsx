import React from 'react';
import { Idea, Category } from '../types';
import { X, PieChart, TrendingUp, Users } from 'lucide-react';

interface StatsModalProps {
  ideas: Idea[];
  onClose: () => void;
}

const StatsModal: React.FC<StatsModalProps> = ({ ideas, onClose }) => {
  const totalIdeas = ideas.length;
  
  // Add explicit type to accumulator to prevent incorrect type inference.
  const categoryCounts = ideas.reduce((acc: Record<string, number>, idea) => {
    const key = idea.category;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCategories = Object.entries(categoryCounts)
    .sort((a: [string, number], b: [string, number]) => b[1] - a[1])
    .slice(0, 5);

  // Add explicit type to accumulator.
  const difficultyCounts = ideas.reduce((acc: Record<string, number>, idea) => {
    const key = idea.difficulty;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Explicitly type the accumulator to ensure `sum` is a number for the arithmetic operation.
  const totalVotes = ideas.reduce((sum: number, idea) => sum + idea.votes, 0);
  const activeBuilders = ideas.filter(i => i.status === 'Building').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl rounded-2xl bg-white p-8 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Market Pulse</h2>
                <p className="text-sm text-gray-500">Archive Analytics & Trends</p>
            </div>
            <button onClick={onClose} className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <X className="h-6 w-6" />
            </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mb-8">
            <div className="rounded-xl bg-brand-50 p-6">
                <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-5 w-5 text-brand-600" />
                    <h3 className="font-semibold text-brand-900">Total Interest</h3>
                </div>
                <p className="text-3xl font-bold text-brand-700">{totalVotes.toLocaleString()}</p>
                <p className="text-xs text-brand-600/80">Total votes cast</p>
            </div>
            <div className="rounded-xl bg-purple-50 p-6">
                <div className="flex items-center gap-3 mb-2">
                    <PieChart className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-purple-900">Archive Size</h3>
                </div>
                <p className="text-3xl font-bold text-purple-700">{totalIdeas}</p>
                <p className="text-xs text-purple-600/80">Generated Ideas</p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-6">
                <div className="flex items-center gap-3 mb-2">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <h3 className="font-semibold text-emerald-900">Building Now</h3>
                </div>
                <p className="text-3xl font-bold text-emerald-700">{activeBuilders}</p>
                <p className="text-xs text-emerald-600/80">Active projects</p>
            </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Top Categories</h3>
                <div className="space-y-3">
                    {topCategories.map(([cat, count]: [string, number]) => {
                        // Ensure safe division and arithmetic type compatibility
                        const percentage = totalIdeas > 0 ? (count / totalIdeas) * 100 : 0;
                        return (
                            <div key={cat} className="group">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-gray-700">{cat}</span>
                                    <span className="text-gray-500">{count} ideas</span>
                                </div>
                                <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                                    <div 
                                        className="h-full rounded-full bg-brand-500 transition-all duration-500 ease-out group-hover:bg-brand-600"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Difficulty Distribution</h3>
                <div className="flex items-end justify-between gap-4 h-48 rounded-xl border border-gray-100 bg-gray-50 p-6">
                    {['Easy', 'Medium', 'Hard'].map((diff) => {
                        const count = difficultyCounts[diff] || 0;
                        // Ensure safe division and arithmetic type compatibility
                        const height = totalIdeas > 0 ? (count / totalIdeas) * 100 : 0;
                        return (
                            <div key={diff} className="flex flex-col items-center justify-end w-full h-full gap-2 group">
                                <div 
                                    className={`w-full rounded-t-lg transition-all duration-500 ${
                                        diff === 'Easy' ? 'bg-green-400' : 
                                        diff === 'Medium' ? 'bg-yellow-400' : 'bg-red-400'
                                    }`}
                                    style={{ height: `${height}%` }}
                                >
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold text-center pt-2">
                                        {count}
                                    </div>
                                </div>
                                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{diff}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StatsModal;