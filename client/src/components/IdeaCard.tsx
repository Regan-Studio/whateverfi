import React from 'react';
import { Idea, Category } from '../types';
import { ArrowUpRight, Bookmark, MessageSquare, Sparkles, TrendingUp, TrendingDown } from 'lucide-react';
import { formatTimeAgo } from '../utils';

interface IdeaCardProps {
  idea: Idea;
  onClick: (idea: Idea) => void;
  onBookmark: (id: string, e: React.MouseEvent) => void;
  onVote: (id: string, e: React.MouseEvent) => void;
  onAnalyze: (idea: Idea, e: React.MouseEvent) => void;
}

const getCategoryColor = (cat: Category) => {
  switch (cat) {
    case Category.AI: return 'bg-purple-50 text-purple-700 ring-purple-600/20';
    case Category.SAAS: return 'bg-blue-50 text-blue-700 ring-blue-600/20';
    case Category.MOBILE: return 'bg-sky-50 text-sky-700 ring-sky-600/20';
    case Category.GAME: return 'bg-rose-50 text-rose-700 ring-rose-600/20';
    case Category.FINTECH: return 'bg-emerald-50 text-emerald-700 ring-emerald-600/20';
    case Category.MARKETPLACE: return 'bg-amber-50 text-amber-700 ring-amber-600/20';
    case Category.EDUCATION: return 'bg-indigo-50 text-indigo-700 ring-indigo-600/20';
    case Category.HEALTH: return 'bg-teal-50 text-teal-700 ring-teal-600/20';
    case Category.HARDWARE: return 'bg-stone-50 text-stone-700 ring-stone-600/20';
    default: return 'bg-gray-50 text-gray-700 ring-gray-500/10';
  }
};

const Sparkline = ({ data, color = "#3b82f6" }: { data: number[], color?: string }) => {
  if (!data || data.length < 2) return null;
  const width = 120;
  const height = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d - min) / range) * height;
    return [x, y];
  });

  const controlPoint = (current: number[], previous: number[], next: number[], isEnd?: boolean) => {
    const p = previous || current;
    const n = next || current;
    const smoothing = 0.2;
    const o = [n[0] - p[0], n[1] - p[1]];
    const angle = Math.atan2(o[1], o[0]);
    const length = Math.sqrt(o[0] ** 2 + o[1] ** 2) * smoothing;
    const x = current[0] + Math.cos(angle + (isEnd ? Math.PI : 0)) * length;
    const y = current[1] + Math.sin(angle + (isEnd ? Math.PI : 0)) * length;
    return [x, y];
  };

  const path = points.reduce((acc, point, i, a) => {
    if (i === 0) return `M ${point[0]},${point[1]}`;
    const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point);
    const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true);
    return `${acc} C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
  }, "");

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="overflow-visible">
       <defs>
        <linearGradient id={`gradient-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.15} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={`${path} L ${width},${height} L 0,${height} Z`} fill={`url(#gradient-${color})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};


const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onClick, onBookmark, onVote, onAnalyze }) => {
  const isPositiveGrowth = idea.trendMetrics.growth >= 0;
  
  return (
    <div 
      onClick={() => onClick(idea)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 hover:ring-brand-500/20 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition-colors group-hover:text-brand-400">Top Keyword</p>
          <h4 className="text-sm font-bold text-gray-900">{idea.trendMetrics.keyword}</h4>
        </div>
        <button 
            onClick={(e) => onBookmark(idea.id, e)}
            className={`z-10 rounded-full p-2 transition-all duration-300 ${
              idea.isBookmarked 
                ? 'bg-brand-50 text-brand-600 scale-100 hover:bg-brand-100' 
                : 'text-gray-300 hover:bg-gray-50 hover:text-gray-500 hover:scale-110'
            }`}
        >
            <Bookmark className={`h-4 w-4 ${idea.isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="flex items-end justify-between mb-6 gap-4">
        <div className="flex gap-6">
            <div>
                <p className="text-2xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {idea.trendMetrics.volume >= 1000 
                        ? (idea.trendMetrics.volume / 1000).toFixed(1) + 'K' 
                        : idea.trendMetrics.volume}
                </p>
                <p className="text-xs font-medium text-gray-400">Volume</p>
            </div>
            <div>
                <p className={`text-2xl font-bold ${isPositiveGrowth ? 'text-emerald-500' : 'text-red-500'}`}>
                    {isPositiveGrowth ? '+' : ''}{idea.trendMetrics.growth}%
                </p>
                <p className="text-xs font-medium text-gray-400">Growth</p>
            </div>
        </div>
        
        <div className="h-10 w-28 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <Sparkline 
                data={idea.trendMetrics.history} 
                color={isPositiveGrowth ? "#10b981" : "#ef4444"} 
            />
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-5 group-hover:via-brand-100 transition-colors"></div>

      <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
            {idea.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-gray-500 group-hover:text-gray-600 transition-colors">
            {idea.description}
          </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
             <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium ring-1 ring-inset ${getCategoryColor(idea.category)}`}>
                {idea.category}
             </span>
             {idea.marketType && (
                 <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-500 ring-1 ring-inset ring-gray-200">
                    {idea.marketType}
                 </span>
             )}
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold text-gray-400 group-hover:text-brand-600 transition-colors">
            View <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;