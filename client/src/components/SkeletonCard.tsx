import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      {/* Shimmer Overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-gray-50/50 to-transparent"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-2">
             <div className="h-4 w-12 rounded-md bg-gray-200/80"></div>
             <div className="h-4 w-16 rounded-md bg-gray-200/80"></div>
          </div>
          <div className="h-6 w-6 rounded-full bg-gray-200/80"></div>
        </div>
        
        <div className="space-y-4">
            <div className="flex gap-4 items-end">
                <div>
                    <div className="h-8 w-24 rounded-lg bg-gray-200/80 mb-2"></div>
                    <div className="h-3 w-12 rounded-md bg-gray-200/60"></div>
                </div>
                <div>
                    <div className="h-8 w-16 rounded-lg bg-gray-200/80 mb-2"></div>
                    <div className="h-3 w-12 rounded-md bg-gray-200/60"></div>
                </div>
                <div className="ml-auto h-10 w-24 rounded-lg bg-gray-100"></div>
            </div>

            <div className="h-px w-full bg-gray-100 my-4"></div>

            <div>
                <div className="h-6 w-3/4 rounded-md bg-gray-200/80 mb-3"></div>
                <div className="space-y-2">
                    <div className="h-4 w-full rounded-md bg-gray-200/60"></div>
                    <div className="h-4 w-5/6 rounded-md bg-gray-200/60"></div>
                    <div className="h-4 w-4/6 rounded-md bg-gray-200/60"></div>
                </div>
            </div>
        </div>

        <div className="mt-6 pt-4 flex justify-between items-center">
             <div className="flex gap-2">
                <div className="h-5 w-16 rounded-full bg-gray-200/80"></div>
                <div className="h-5 w-16 rounded-full bg-gray-200/80"></div>
             </div>
             <div className="h-4 w-20 rounded-md bg-gray-200/80"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;