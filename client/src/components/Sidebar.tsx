
import React from 'react';
import { Category } from '../types';
import { Home, Bookmark, TrendingUp, Grid, Hash, Tag, Info, FileText } from 'lucide-react';

interface SidebarProps {
  selectedCategory: Category | 'All';
  onSelectCategory: (cat: Category | 'All') => void;
  viewMode: 'home' | 'saved' | 'created';
  onChangeView: (view: 'home' | 'saved' | 'created') => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  selectedCategory, 
  onSelectCategory, 
  viewMode, 
  onChangeView,
  className = '' 
}) => {
  const categories = Object.values(Category).filter(c => c !== 'All');

  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {/* Main Nav */}
      <div>
        <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Menu
        </h3>
        <nav className="space-y-1">
          <button
            onClick={() => onChangeView('home')}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              viewMode === 'home' ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Home className="h-4 w-4" />
            Feed
          </button>
          <button
            onClick={() => onChangeView('saved')}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              viewMode === 'saved' ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Bookmark className="h-4 w-4" />
            Saved Ideas
          </button>
          <button
            onClick={() => onChangeView('created')}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              viewMode === 'created' ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <FileText className="h-4 w-4" />
            My Ideas
          </button>
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
            <TrendingUp className="h-4 w-4" />
            Top Charts
          </button>
        </nav>
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Categories
        </h3>
        <nav className="space-y-1">
          <button
            onClick={() => onSelectCategory('All')}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'All' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Grid className="h-4 w-4" />
            All Categories
          </button>
          {categories.map(cat => (
             <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === cat ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
             >
               <span className="flex items-center gap-3">
                 <Hash className="h-4 w-4 text-gray-400" />
                 {cat}
               </span>
             </button>
          ))}
        </nav>
      </div>
      
      {/* Footer Links */}
      <div className="mt-auto px-3 pb-6">
        <button className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600">
            <Info className="h-3 w-3" />
            About whateverFi
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
