import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Menu, Plus, BarChart, LogOut, LayoutDashboard, Crown, ChevronDown, User as UserIcon, Settings, Shield, Star } from 'lucide-react';
import { Category } from '../types';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchTerm: string;
  onToggleSidebar: () => void;
  onOpenSubmit: () => void;
  onOpenStats: () => void;
  selectedCategory?: Category | 'All';
  onSelectCategory?: (category: Category | 'All') => void;
  selectedDifficulty?: string;
  onSelectDifficulty?: (difficulty: string) => void;
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
    <path d="M15.5 3L13.5 8" />
    <path d="M13.5 8C10.5 8 8.5 9 8.5 13C8.5 16 6.5 19 4.5 21L10.5 21L12.5 19" />
    <path d="M13.5 8L17.5 9C19.5 10 20.5 12 19.5 15C18.5 17 16.5 18 14.5 18L12.5 19" />
    <circle cx="15.5" cy="12" r="1" fill="currentColor" />
    <path d="M8.5 12L6.5 10" />
    <path d="M7.5 16L5.5 14" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ 
  onSearch, 
  searchTerm, 
  onToggleSidebar, 
  onOpenSubmit, 
  onOpenStats,
  selectedCategory = 'All',
  onSelectCategory = (_: Category | 'All') => {},
  selectedDifficulty = 'All',
  onSelectDifficulty = (_: string) => {}
}) => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isPro = user?.plan === 'pro';
  const isAdmin = user?.role === 'admin';

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
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white shadow-sm">
              <FuturisticUnicorn className="h-5 w-5" />
            </div>
            <span className="hidden text-xl font-bold tracking-tight text-gray-900 sm:block">whateverFi</span>
            {isPro && (
                <span className="inline-flex items-center rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-700/10">
                    PRO
                </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 lg:px-12 gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => onSelectCategory(e.target.value as Category | 'All')}
            className="hidden md:block h-10 max-w-[140px] rounded-full border-0 bg-gray-100 pl-3 pr-8 text-sm text-gray-900 focus:ring-2 focus:ring-brand-600 focus:bg-white transition-all cursor-pointer hover:bg-gray-200"
          >
            <option value="All">All Categories</option>
            {Object.values(Category).filter(c => c !== 'All').map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => onSelectDifficulty(e.target.value)}
            className="hidden md:block h-10 max-w-[120px] rounded-full border-0 bg-gray-100 pl-3 pr-8 text-sm text-gray-900 focus:ring-2 focus:ring-brand-600 focus:bg-white transition-all cursor-pointer hover:bg-gray-200"
          >
            <option value="All">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

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
          {user ? (
            <>
              {!isPro && (
                <button
                    onClick={() => navigate('/upgrade')}
                    className="hidden sm:flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:from-orange-500 hover:to-red-600 transition-all"
                >
                    <Crown className="h-3 w-3" /> Upgrade
                </button>
              )}
              <button
                onClick={onOpenStats}
                className="hidden sm:flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                title="View market statistics and trends"
              >
                <BarChart className="h-4 w-4" />
              </button>
              
              <button 
                onClick={onOpenSubmit}
                className="flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 mr-2"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Submit Idea</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white pl-2 pr-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition-all"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <UserIcon className="h-4 w-4" />
                  </div>
                  <span className="hidden md:inline-block max-w-[100px] truncate">
                    {user.name || user.email?.split('@')[0]}
                  </span>
                  {user.reputation > 0 && (
                      <span className="ml-1 hidden md:flex items-center text-xs text-yellow-600 bg-yellow-50 px-1.5 rounded">
                          <Star className="h-3 w-3 mr-0.5 fill-yellow-500 text-yellow-500" />
                          {user.reputation}
                      </span>
                  )}
                  <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <>
                    <div 
                        className="fixed inset-0 z-30" 
                        onClick={() => setIsDropdownOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-40 animate-fade-in">
                      <div className="px-4 py-2 border-b border-gray-100 mb-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Signed in as</p>
                        <p className="text-sm font-medium text-gray-900 truncate" title={user.email}>{user.email}</p>
                      </div>
                      
                      <button
                        onClick={() => { navigate('/dashboard'); setIsDropdownOpen(false); }}
                        className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <LayoutDashboard className="mr-3 h-4 w-4 text-gray-400" />
                        My Dashboard
                      </button>

                      <button
                        onClick={() => { navigate('/settings'); setIsDropdownOpen(false); }}
                        className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Settings className="mr-3 h-4 w-4 text-gray-400" />
                        Settings
                      </button>

                      {isAdmin && (
                          <button
                            onClick={() => { navigate('/admin'); setIsDropdownOpen(false); }}
                            className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Shield className="mr-3 h-4 w-4 text-purple-500" />
                            Admin Console
                          </button>
                      )}
                      
                      <button
                        onClick={() => { handleLogout(); setIsDropdownOpen(false); }}
                        className="flex w-full items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="mr-3 h-4 w-4 text-red-500" />
                        Sign out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                Log In
              </Link>
              <Link to="/signup" className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
