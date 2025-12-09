import React from 'react';
import { Search, Menu, Plus, BarChart } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchTerm: string;
  onToggleSidebar: () => void;
  onOpenSubmit: () => void;
  onOpenStats: () => void;
}

const FuturisticUnicorn = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Horn */}
    <path d="M15.5 3L13.5 8" />
    {/* Head/Mane Flow */}
    <path d="M13.5 8C10.5 8 8.5 9 8.5 13C8.5 16 6.5 19 4.5 21L10.5 21L12.5 19" />
    {/* Face Profile */}
    <path d="M13.5 8L17.5 9C19.5 10 20.5 12 19.5 15C18.5 17 16.5 18 14.5 18L12.5 19" />
    {/* Eye */}
    <circle cx="15.5" cy="12" r="1" fill="currentColor" />
    {/* Futuristic Mane Spikes */}
    <path d="M8.5 12L6.5 10" />
    <path d="M7.5 16L5.5 14" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ onSearch, searchTerm, onToggleSidebar, onOpenSubmit, onOpenStats }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
           <button 
            onClick={onToggleSidebar}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white shadow-sm">
              <FuturisticUnicorn className="h-5 w-5" />
            </div>
            <span className="hidden text-xl font-bold tracking-tight text-gray-900 sm:block">whateverFi</span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 lg:px-12">
          <div className="relative w-full max-w-lg">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              className="block w-full rounded-full border-0 bg-gray-100 py-2 pl-10 pr-4 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-brand-600 sm:text-sm sm:leading-6 transition-all duration-200"
              placeholder="Search ideas..."
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenStats}
             className="hidden sm:flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
             title="View market statistics and trends"
          >
             <BarChart className="h-4 w-4" />
          </button>

          <button 
            onClick={onOpenSubmit}
            className="flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Submit Idea</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;