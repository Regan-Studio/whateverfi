import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-gray-900 font-semibold">
              Scaffolding inspired by Regan.Studio
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8">
           <p className="text-xs leading-5 text-gray-500 text-center md:text-left max-w-4xl mx-auto md:mx-0">
              whateverFi offers idea research and educational content only. It does not make promises or provide financial advice. 
              Revenue projections, performance scores, and examples are for illustration purposes and may not reflect actual results. 
              Always conduct your own due diligence before making decisions.
           </p>
           <p className="mt-4 text-xs text-center md:text-left text-gray-400">
             &copy; 2025 Regan.Studio All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;