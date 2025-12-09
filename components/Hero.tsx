
import React from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

interface HeroProps {
  onGenerate: () => void;
  isGenerating: boolean;
}

const Hero: React.FC<HeroProps> = ({ onGenerate, isGenerating }) => {
  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-brand-900 px-6 py-10 shadow-2xl sm:px-12 sm:py-16">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-500 blur-3xl"></div>
        <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-300 ring-1 ring-inset ring-brand-500/20">
          <Sparkles className="mr-2 h-3 w-3 text-brand-300" />
          Updated Daily
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Discover the next <br />
          <span className="text-brand-400">Unicorn Startup.</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A curated archive of breakthrough ideas, validated by AI and the community. 
          Don't just browse—analyze, remix, and build.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button 
            onClick={onGenerate}
            disabled={isGenerating}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 disabled:opacity-70 transition-all"
          >
            {isGenerating ? (
                <>
                    <Zap className="mr-2 h-4 w-4 animate-pulse" />
                    Generating...
                </>
            ) : (
                <>
                    <Zap className="mr-2 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    Generate New Ideas
                </>
            )}
          </button>
          <button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white ring-1 ring-inset ring-white/20 hover:bg-white/10 transition-all">
            View Trends <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
