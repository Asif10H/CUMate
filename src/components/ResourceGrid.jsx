import React, { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';

const ResourceGrid = ({ resources, selectedSemester, setSelectedSemester }) => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const [visibleCount, setVisibleCount] = useState(12);
  const [prevResources, setPrevResources] = useState(resources);

  // Reset pagination during render when resources array changes (e.g. new filter applied)
  if (resources !== prevResources) {
    setPrevResources(resources);
    setVisibleCount(12);
  }

  const visibleResources = resources.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative -mt-8 z-20">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Discover Resources</h2>
                <p className="text-slate-500 mt-1 text-sm font-medium">Browse high-quality study materials tailored for your courses.</p>
            </div>
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-4 py-2 rounded-lg mt-4 sm:mt-0">
                <i className="fa-solid fa-book-open mr-2 text-[#064E3B]"></i>
                Showing <span className="font-bold text-slate-900 mx-1">{visibleResources.length}</span> of <span className="font-bold text-slate-900 mx-1">{resources.length}</span> items
            </div>
        </div>

        {/* Semester Filter Pill Navigation */}
        <div className="mb-8 overflow-x-auto pb-2 dropdown-scrollbar">
            <div className="flex space-x-3 w-max">
                <button 
                  onClick={() => setSelectedSemester('')}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm cursor-pointer ${selectedSemester === '' ? 'bg-[#064E3B] text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                >
                    All Semesters
                </button>
                {semesters.map(sem => (
                    <button 
                      key={sem}
                      onClick={() => setSelectedSemester(sem)}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm cursor-pointer ${selectedSemester === sem ? 'bg-[#064E3B] text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                    >
                        Semester {sem}
                    </button>
                ))}
            </div>
        </div>

        <div key={resources.length + selectedSemester} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {visibleResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
            
            {resources.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center bg-white rounded-2xl border border-slate-100">
                  <i className="fa-solid fa-folder-open text-6xl text-slate-200 mb-4"></i>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No resources found</h3>
                  <p className="text-slate-500">Try adjusting your filters or search query to find what you're looking for.</p>
              </div>
            )}
        </div>

        {/* Load More Pagination Button */}
        {visibleCount < resources.length && (
            <div className="mt-12 flex justify-center">
                <button 
                    onClick={handleLoadMore}
                    className="group flex items-center justify-center px-8 py-3.5 border-2 border-[#064E3B] text-base font-extrabold rounded-xl text-[#064E3B] bg-transparent hover:bg-[#064E3B] hover:text-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                    <i className="fa-solid fa-rotate-right mr-2 group-hover:animate-spin"></i> Load More Resources
                </button>
            </div>
        )}
    </main>
  );
};

export default ResourceGrid;
