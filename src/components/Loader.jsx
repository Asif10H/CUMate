import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="relative w-20 h-20 mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
            <div className="absolute inset-0 rounded-full border-4 border-[#064E3B] border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <i className="fa-solid fa-graduation-cap text-[#064E3B] text-xl"></i>
            </div>
        </div>
        <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Loading Resources...</h3>
        <p className="text-slate-500 mt-2 text-sm font-medium">Preparing the best study materials for you.</p>
    </div>
  );
};

export default Loader;
