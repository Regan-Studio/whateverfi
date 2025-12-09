
import React from 'react';
import { Idea } from '../types';
import { TrendingUp, Mail, ArrowUpRight, Tag } from 'lucide-react';

interface RightPanelProps {
  ideas: Idea[];
  className?: string;
}

const RightPanel: React.FC<RightPanelProps> = ({ ideas, className = '' }) => {
  // Calculate Trending Tags
  const tags = ideas.flatMap(i => i.tags);
  // Fix: Explicitly type accumulator in the callback to ensure correct type inference.
  const tagCounts = tags.reduce((acc: Record<string, number>, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  
  const topTags = Object.entries(tagCounts)
    // FIX: Explicitly type sort arguments to ensure correct type inference for arithmetic operations.
    .sort((a: [string, number], b: [string, number]) => b[1] - a[1])
    .slice(0, 8);

  // Calculate Top Ideas
  const topIdeas = [...ideas]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 4);

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      
      {/* Newsletter Widget */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 text-brand-600 mb-2">
            <Mail className="h-5 w-5" />
            <h3 className="font-bold text-sm">Weekly Digest</h3>
        </div>
        <p className="mb-4 text-xs text-gray-500">
          Get the top 5 vetted startup ideas delivered to your inbox every Monday.
        </p>
        <div className="space-y-2">
          <input 
            type="email" 
            placeholder="you@example.com" 
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:ring-brand-500"
          />
          <button className="w-full rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>

      {/* Trending Tags */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 text-gray-900 mb-4">
            <TrendingUp className="h-4 w-4" />
            <h3 className="font-bold text-sm">Trending Topics</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {topTags.map(([tag, count]) => (
                <span key={tag} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 hover:bg-gray-100 cursor-pointer transition-colors">
                    <Tag className="mr-1 h-3 w-3 text-gray-400" />
                    {tag}
                    <span className="ml-1 text-gray-400">({count})</span>
                </span>
            ))}
        </div>
      </div>

      {/* Top Ideas Mini-List */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
         <div className="flex items-center justify-between text-gray-900 mb-4">
            <h3 className="font-bold text-sm">Must Read</h3>
            <ArrowUpRight className="h-4 w-4 text-gray-400" />
        </div>
        <div className="space-y-4">
            {topIdeas.map((idea, i) => (
                <div key={idea.id} className="group flex cursor-pointer gap-3 items-start">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500 group-hover:bg-brand-100 group-hover:text-brand-600">
                        {i + 1}
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:text-brand-600 transition-colors">
                            {idea.title}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-2">
                            {idea.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default RightPanel;