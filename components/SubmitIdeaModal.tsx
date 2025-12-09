
import React, { useState } from 'react';
import { Category } from '../types';
import { X } from 'lucide-react';

interface SubmitIdeaModalProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const SubmitIdeaModal: React.FC<SubmitIdeaModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: Category.SAAS,
    tags: '',
    difficulty: 'Medium',
    techStack: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        techStack: formData.techStack.split(',').map(t => t.trim()).filter(t => t)
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Submit Idea</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input 
                    required
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Uber for Dog Walking"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm"
                        value={formData.category}
                        onChange={e => setFormData({...formData, category: e.target.value as Category})}
                    >
                        {Object.values(Category).filter(c => c !== 'All').map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                    <select
                        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm"
                        value={formData.difficulty}
                        onChange={e => setFormData({...formData, difficulty: e.target.value})}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm"
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe the problem and your solution..."
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
                <input 
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm"
                    value={formData.tags}
                    onChange={e => setFormData({...formData, tags: e.target.value})}
                    placeholder="B2B, AI, Mobile"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Tech Stack (comma separated)</label>
                <input 
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm"
                    value={formData.techStack}
                    onChange={e => setFormData({...formData, techStack: e.target.value})}
                    placeholder="React, Node.js, Stripe"
                />
            </div>
            
            <div className="pt-4">
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                    Submit Idea
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitIdeaModal;
