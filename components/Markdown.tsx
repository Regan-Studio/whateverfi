import React from 'react';

interface MarkdownProps {
  content: string;
  className?: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Basic parsing logic for a smoother reading experience
  const parseLine = (line: string, index: number) => {
    // Headers
    if (line.startsWith('### ')) return <h3 key={index} className="text-lg font-bold text-gray-900 mt-4 mb-2">{line.replace('### ', '')}</h3>;
    if (line.startsWith('## ')) return <h2 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.replace('## ', '')}</h2>;
    if (line.startsWith('# ')) return <h1 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-4">{line.replace('# ', '')}</h1>;
    
    // Lists
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return (
        <div key={index} className="flex gap-2 ml-2 mb-1">
          <span className="text-brand-500 mt-1.5">•</span>
          <span className="text-gray-700 leading-relaxed">{parseBold(line.substring(2))}</span>
        </div>
      );
    }

    // Numbered Lists
    if (/^\d+\.\s/.test(line)) {
       return (
         <div key={index} className="flex gap-2 ml-2 mb-1">
           <span className="font-bold text-brand-600 min-w-[1.5rem]">{line.match(/^\d+\./)?.[0]}</span>
           <span className="text-gray-700 leading-relaxed">{parseBold(line.replace(/^\d+\.\s/, ''))}</span>
         </div>
       )
    }

    // Empty lines
    if (!line.trim()) return <div key={index} className="h-2" />;

    // Paragraphs
    return <p key={index} className="text-gray-600 leading-relaxed mb-2">{parseBold(line)}</p>;
  };

  const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={`font-sans ${className}`}>
      {content.split('\n').map((line, i) => parseLine(line, i))}
    </div>
  );
};

export default Markdown;
