import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <div className="animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
             <div className="h-5 w-12 rounded bg-gray-200"></div>
             <div className="h-5 w-16 rounded bg-gray-200"></div>
          </div>
          <div className="h-5 w-5 rounded bg-gray-200"></div>
        </div>
        
        <div className="h-6 w-3/4 rounded bg-gray-200 mb-3"></div>
        <div className="space-y-2">
            <div className="h-4 w-full rounded bg-gray-200"></div>
            <div className="h-4 w-5/6 rounded bg-gray-200"></div>
            <div className="h-4 w-4/6 rounded bg-gray-200"></div>
        </div>

        <div className="mt-4 flex gap-2">
            <div className="h-6 w-12 rounded bg-gray-200"></div>
            <div className="h-6 w-12 rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100 pt-4 flex justify-between animate-pulse">
          <div className="h-4 w-16 rounded bg-gray-200"></div>
          <div className="h-4 w-12 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
