
import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { Category } from '../types';

interface GeneratorModalProps {
  onClose: () => void;
  onGenerate: (params: any) => void;
  isGenerating: boolean;
}

const GeneratorModal: React.FC<GeneratorModalProps> = ({ onClose, onGenerate, isGenerating }) => {
  const [step, setStep] = useState(1);
  
  // Step 1 State
  const [industry, setIndustry] = useState<string>('SaaS');
  const [userType, setUserType] = useState('');
  const [ideaType, setIdeaType] = useState<'Novel' | 'Proven'>('Novel');

  // Step 2 State
  const [marketSize, setMarketSize] = useState(50); // Slider 0-100
  const [audience, setAudience] = useState<'B2B' | 'B2C'>('B2B');
  const [region, setRegion] = useState('Global');
  const [solutionType, setSolutionType] = useState<'DFY' | 'DWY' | 'DIY'>('DIY');
  const [microSaas, setMicroSaas] = useState(false);

  const industries = Object.values(Category).filter(c => c !== 'All');

  const handleGenerate = () => {
      const params = {
          industry,
          userType,
          ideaType,
          marketSize: marketSize < 33 ? 'Niche' : marketSize < 66 ? 'Moderate' : 'Broad',
          audience,
          region,
          solutionType,
          microSaas
      };
      onGenerate(params);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="border-b border-gray-100 bg-white p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Generate Your Next Idea</h2>
            <p className="text-sm text-gray-500 mt-1">Answer a few questions to discover ideas tailored to your market.</p>
            <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
            </button>
        </div>

        {/* Body */}
        <div className="p-8 bg-gray-50 min-h-[400px]">
            {step === 1 ? (
                <div className="space-y-6 animate-fade-in">
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Step 1: Industry & Solution</label>
                        <select 
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className="w-full rounded-xl border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:ring-brand-500"
                        >
                            {industries.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Industry User (Optional)</label>
                        <input 
                            type="text"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            placeholder="E.g., journalists, nurses, developers"
                            className="w-full rounded-xl border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:ring-brand-500"
                        />
                    </div>

                    <div>
                         <label className="block text-sm font-bold text-gray-900 mb-3">Idea Type</label>
                         <div className="grid grid-cols-2 gap-4">
                             <div 
                                onClick={() => setIdeaType('Novel')}
                                className={`cursor-pointer rounded-xl border p-4 transition-all ${ideaType === 'Novel' ? 'border-brand-500 bg-brand-50 ring-1 ring-brand-500' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                             >
                                 <div className="flex items-center gap-2 mb-1">
                                     <Sparkles className={`h-4 w-4 ${ideaType === 'Novel' ? 'text-brand-600' : 'text-gray-400'}`} />
                                     <span className={`font-bold ${ideaType === 'Novel' ? 'text-brand-900' : 'text-gray-900'}`}>Novel/Innovative</span>
                                 </div>
                                 <p className="text-xs text-gray-500">Explore new opportunities.</p>
                             </div>
                             <div 
                                onClick={() => setIdeaType('Proven')}
                                className={`cursor-pointer rounded-xl border p-4 transition-all ${ideaType === 'Proven' ? 'border-green-500 bg-green-50 ring-1 ring-green-500' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                             >
                                 <div className="flex items-center gap-2 mb-1">
                                     <Check className={`h-4 w-4 ${ideaType === 'Proven' ? 'text-green-600' : 'text-gray-400'}`} />
                                     <span className={`font-bold ${ideaType === 'Proven' ? 'text-green-900' : 'text-gray-900'}`}>Proven Models</span>
                                 </div>
                                 <p className="text-xs text-gray-500">Validated ideas with twists.</p>
                             </div>
                         </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-6 animate-fade-in">
                    <div>
                         <div className="flex justify-between items-center mb-2">
                             <label className="text-sm font-bold text-gray-900">Target Market Size</label>
                             <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                                 {marketSize < 33 ? 'Very Niche' : marketSize < 66 ? 'Moderate' : 'Very Broad'}
                             </span>
                         </div>
                         <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={marketSize} 
                            onChange={(e) => setMarketSize(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                         />
                         <p className="text-xs text-gray-500 mt-2">Defines how broad your market is (the macro lens).</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div>
                             <label className="block text-sm font-bold text-gray-900 mb-2">Audience Type</label>
                             <div className="flex rounded-lg bg-white p-1 shadow-sm ring-1 ring-gray-200">
                                 <button 
                                    onClick={() => setAudience('B2B')}
                                    className={`flex-1 rounded-md py-2 text-xs font-bold transition-all ${audience === 'B2B' ? 'bg-brand-100 text-brand-700' : 'text-gray-500 hover:bg-gray-50'}`}
                                 >
                                     B2B
                                 </button>
                                 <button 
                                    onClick={() => setAudience('B2C')}
                                    className={`flex-1 rounded-md py-2 text-xs font-bold transition-all ${audience === 'B2C' ? 'bg-brand-100 text-brand-700' : 'text-gray-500 hover:bg-gray-50'}`}
                                 >
                                     B2C
                                 </button>
                             </div>
                         </div>
                         <div>
                             <label className="block text-sm font-bold text-gray-900 mb-2">Solution Type</label>
                             <select 
                                value={solutionType}
                                onChange={(e) => setSolutionType(e.target.value as any)}
                                className="w-full rounded-lg border-gray-200 bg-white py-2 text-sm focus:border-brand-500 focus:ring-brand-500"
                             >
                                 <option value="DIY">DIY (Self-Serve)</option>
                                 <option value="DWY">DWY (Done With You)</option>
                                 <option value="DFY">DFY (Automated)</option>
                             </select>
                         </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between rounded-xl border border-orange-100 bg-orange-50 p-4">
                            <div>
                                <h4 className="text-sm font-bold text-orange-900 flex items-center gap-2">
                                    Micro-SaaS Mode
                                    <span className="bg-orange-200 text-orange-800 text-[10px] px-1.5 rounded">NEW</span>
                                </h4>
                                <p className="text-xs text-orange-700/80 mt-1">Zooms into sub-niches within your market.</p>
                            </div>
                            <button 
                                onClick={() => setMicroSaas(!microSaas)}
                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${microSaas ? 'bg-orange-500' : 'bg-gray-200'}`}
                            >
                                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${microSaas ? 'translate-x-5' : 'translate-x-0'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 bg-white p-6 flex justify-between items-center">
            {step === 2 ? (
                <>
                    <button onClick={() => setStep(1)} className="text-sm font-medium text-gray-500 hover:text-gray-900">Back</button>
                    <button 
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="rounded-full bg-brand-600 px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-brand-500 disabled:opacity-70 flex items-center gap-2"
                    >
                        {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                        {isGenerating ? 'Generating...' : 'Generate Ideas'}
                    </button>
                </>
            ) : (
                <>
                     <span className="text-xs text-gray-400">Step 1 of 2</span>
                     <button 
                        onClick={() => setStep(2)}
                        className="rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white shadow hover:bg-gray-800 flex items-center gap-2"
                     >
                         Next Step <ArrowRight className="h-4 w-4" />
                     </button>
                </>
            )}
        </div>
      </div>
    </div>
  );
};

export default GeneratorModal;
