

import React, { useState, useEffect } from 'react';
import { Idea, TrendMetrics, MarketAnalysis } from '../types';
import { X, CheckCircle, AlertTriangle, Info, ExternalLink, Share2, Flag, Globe, Briefcase, Database, Lightbulb, Target, Layers, Shield, Search, Copy, Check, TrendingUp } from 'lucide-react';
import { useToast } from './Toast';
import Markdown from './Markdown';

interface IdeaModalProps {
  idea: Idea | null;
  allIdeas: Idea[];
  onClose: () => void;
  onAddComment: (ideaId: string, text: string) => void;
  onUpdateStatus: (ideaId: string, status: 'Open' | 'Building' | 'Shipped') => void;
  onSelectIdea: (idea: Idea) => void;
  initialTab?: 'overview' | 'insight';
}

// Reusable Card for Data Points
const DataCard = ({ label, value, subtext, color = "blue" }: { label: string, value: string, subtext?: string, color?: string }) => (
    <div className={`rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm ring-1 ring-${color}-50`}>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
        <p className={`mt-1 text-xl font-bold text-${color}-600`}>{value}</p>
        {subtext && <p className="mt-1 text-[10px] text-gray-400">{subtext}</p>}
    </div>
);

const PainSeverityGauge = ({ score }: { score: number }) => {
    const percentage = Math.max(0, Math.min(100, score));
    const color = percentage > 75 ? 'red' : percentage > 50 ? 'orange' : 'green';
    const rotation = (percentage / 100) * 180 - 90;

    return (
        <div className="relative w-full h-24 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex flex-col items-center justify-end p-4">
            <div 
                className={`absolute left-0 top-0 w-full h-full bg-gradient-to-t from-gray-200 to-transparent`}
                style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 50%, 0% 50%)' }}
            />
            <div 
                className={`absolute w-1/2 h-full left-0 top-0 origin-right transition-transform duration-500`}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className={`w-full h-full bg-gradient-to-b from-${color}-400 to-${color}-500`} />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-2xl font-bold text-${color}-600`}>{score}%</span>
                <span className="text-xs font-medium text-gray-500">Pain Severity</span>
            </div>
        </div>
    );
};

const ValidationCheckpoints = () => {
    const checkpoints = [
        "Market Demand Validation", "Willingness to Pay", "Distribution Channel",
        "Technical Feasibility", "Competitive Positioning", "Solution Approach"
    ];
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-gray-500 mb-4"><Check className="h-4 w-4" /> Validation Checkpoints</h4>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {checkpoints.map(c => (
                    <div key={c} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{c}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


const IdeaModal: React.FC<IdeaModalProps> = ({ idea, onClose, onUpdateStatus }) => {
  const { showToast } = useToast();

  if (!idea) return null;
  const isPositiveGrowth = idea.trendMetrics.growth >= 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-gray-50 shadow-2xl ring-1 ring-gray-900/5 animate-slide-up">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-gray-200 flex items-start justify-between">
            <div>
                <div className="flex flex-wrap items-center gap-3 mb-2 text-xs text-gray-500">
                    <span className="font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">Type: {idea.category}</span>
                    <span>•</span>
                    <span>Industry: {idea.tags[0]}</span>
                    <span>•</span>
                    <span>Market: {idea.marketType || 'N/A'}</span>
                    <span>•</span>
                    <span>Solution: {idea.solutionType || 'N/A'}</span>
                    <span>•</span>
                    <span>Region: {idea.region}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">{idea.title}</h2>
            </div>
            <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-200">
                    <Share2 className="h-4 w-4" />
                    Share
                </button>
                <button onClick={onClose} className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                    <X className="h-5 w-5" />
                </button>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-4xl px-6 py-8 space-y-8">
                
                {/* Executive Summary */}
                <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{idea.description}</h3>
                     <div className="flex gap-2 mt-4">
                         {idea.tags.map(tag => (
                             <span key={tag} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">{tag}</span>
                         ))}
                     </div>
                </section>

                {/* Problem & Solution Grid */}
                <section className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                         <div className="flex items-center gap-2 mb-4">
                             <div className="p-2 bg-red-50 rounded-lg"><AlertTriangle className="h-5 w-5 text-red-500" /></div>
                             <h4 className="text-lg font-bold text-gray-900">The Problem</h4>
                         </div>
                         <p className="text-gray-600 text-sm leading-relaxed">{idea.problem || idea.fullContent}</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                         <div className="flex items-center gap-2 mb-4">
                             <div className="p-2 bg-green-50 rounded-lg"><CheckCircle className="h-5 w-5 text-green-500" /></div>
                             <h4 className="text-lg font-bold text-gray-900">The Solution</h4>
                         </div>
                         <p className="text-gray-600 text-sm leading-relaxed">{idea.solution || idea.description}</p>
                    </div>
                </section>

                {/* Market Analysis Grid */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">Market Size & Opportunity</h3>
                    </div>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                        <DataCard label="Total Market (TAM)" value={idea.marketAnalysis?.tam || "$1B+"} color="blue" />
                        <DataCard label="Target Segment" value={idea.marketAnalysis?.targetSegment || "N/A"} color="indigo" />
                        <DataCard label="Revenue Potential" value={idea.marketAnalysis?.revenuePotential || "N/A"} color="green" />
                        <DataCard label="Market Growth" value={idea.marketAnalysis?.marketGrowth || "10%"} color="purple" />
                    </div>
                    <div className="mt-4 bg-blue-50/50 rounded-lg border border-blue-100 p-3 text-xs text-blue-800 flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Market Validation: Estimates based on industry reports, competitor analysis, and target audience sizing.
                    </div>
                </section>

                {/* Keyword Trend Analysis */}
                <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                     <div className="flex items-center justify-between mb-6">
                         <div>
                             <h3 className="text-lg font-bold text-gray-900">Keyword Demand Analysis</h3>
                             <p className="text-sm text-gray-500">Top relevant search term: <span className="font-bold text-gray-900">{idea.trendMetrics.keyword}</span></p>
                         </div>
                     </div>
                     
                     <div className="flex flex-col md:flex-row gap-8">
                         <div className="flex gap-8 md:flex-col md:gap-4 min-w-[120px]">
                             <div>
                                 <p className="text-xs text-gray-500 uppercase">Volume</p>
                                 <p className="text-3xl font-bold text-gray-900">{idea.trendMetrics.volume.toLocaleString()}</p>
                             </div>
                             <div>
                                 <p className="text-xs text-gray-500 uppercase">Growth</p>
                                 <p className={`text-3xl font-bold ${isPositiveGrowth ? 'text-green-500' : 'text-red-500'}`}>
                                     {isPositiveGrowth ? '+' : ''}{idea.trendMetrics.growth}%
                                 </p>
                             </div>
                         </div>
                         
                         {/* Large Chart Visualization placeholder */}
                         <div className="flex-1 h-48 w-full bg-gray-50 rounded-xl p-4 relative">
                            <TrendingUp className="h-16 w-16 text-gray-200 m-auto"/>
                         </div>
                     </div>
                </section>
                
                {/* Pain & Validation */}
                <section className="grid md:grid-cols-2 gap-6">
                    <PainSeverityGauge score={idea.marketAnalysis.painSeverity} />
                    <ValidationCheckpoints />
                </section>

                {/* Deep Dive Details */}
                <section className="space-y-4">
                     <div className="bg-white rounded-xl border border-gray-200 p-5">
                         <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-gray-500 mb-3"><Target className="h-4 w-4" /> Target Audience & Outcome</h4>
                         <div className="grid md:grid-cols-2 gap-6">
                             <div>
                                 <p className="text-xs font-semibold text-brand-600">Who is it for?</p>
                                 <p className="text-sm text-gray-700 mt-1">{idea.targetAudience}</p>
                             </div>
                             <div>
                                 <p className="text-xs font-semibold text-green-600">Dream Outcome</p>
                                 <p className="text-sm text-gray-700 mt-1">Users efficiently solve {idea.trendMetrics.keyword} problems with automated tools.</p>
                             </div>
                         </div>
                     </div>

                     <div className="bg-white rounded-xl border border-gray-200 p-5">
                         <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-gray-500 mb-3"><Layers className="h-4 w-4" /> System Mechanics</h4>
                         <p className="text-sm text-gray-700 leading-relaxed">
                             {idea.solution} - Designed as a {idea.solutionType} {idea.category} platform.
                             Key mechanics include automated data ingestion, AI-driven analysis, and actionable reporting dashboards.
                         </p>
                     </div>
                </section>

                {/* Competition */}
                <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Competition Landscape</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {idea.marketAnalysis?.competitors.map((comp, i) => (
                            <div key={i} className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">{comp.name[0]}</div>
                                    <h5 className="font-bold text-gray-900">{comp.name}</h5>
                                </div>
                                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{comp.description}</p>
                                <a href={`https://${comp.website}`} target="_blank" rel="noreferrer" className="text-xs font-medium text-brand-600 hover:underline flex items-center gap-1">
                                    Visit Website <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        ))}
                        {(!idea.marketAnalysis?.competitors || idea.marketAnalysis.competitors.length === 0) && (
                             <div className="col-span-full p-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                 No direct competitors analyzed yet.
                             </div>
                        )}
                    </div>
                </section>

            </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-white border-t border-gray-200 p-4 sm:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Flag className="h-4 w-4" /> Report</span>
                <span className="flex items-center gap-1"><Globe className="h-4 w-4" /> {idea.region}</span>
            </div>
            <div className="flex gap-3">
                <button 
                    onClick={() => onUpdateStatus(idea.id, 'Building')}
                    className="rounded-lg px-4 py-2.5 border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                    {idea.status === 'Building' ? 'Mark Open' : 'Claim Idea'}
                </button>
                <button className="rounded-lg px-6 py-2.5 bg-gray-900 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Validate & Build
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaModal;
