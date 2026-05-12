import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrolled, searchQuery, setSearchQuery }) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <nav className={`glass-nav fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/95 backdrop-blur-md border-b border-slate-200' : 'bg-white border-b border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
                  <div className="bg-[#064E3B] text-white p-2 rounded-lg mr-3 group-hover:bg-emerald-800 transition-colors">
                      <i className="fa-solid fa-graduation-cap text-xl"></i>
                  </div>
                  <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#064E3B]">CUMate</span>
              </Link>
              
              {/* Desktop Search Bar */}
              <div className="hidden md:flex flex-1 max-w-lg mx-10">
                  <div className="relative w-full group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <i className="fa-solid fa-search text-slate-400 group-focus-within:text-[#064E3B] transition-colors"></i>
                      </div>
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-11 pr-4 py-2.5 border border-slate-300 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] sm:text-sm transition-all duration-300 ease-in-out shadow-inner" 
                        placeholder="Search courses, notes, or authors..." 
                      />
                  </div>
              </div>

              <div className="flex items-center gap-3">
                  {/* Mobile Search Toggle */}
                  <button 
                    onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                    className="md:hidden flex items-center justify-center p-2 rounded-full text-slate-500 hover:text-[#064E3B] hover:bg-slate-100 transition-colors"
                  >
                      <i className={`fa-solid ${isMobileSearchOpen ? 'fa-xmark' : 'fa-search'} text-lg`}></i>
                  </button>

                  <Link 
                    to="/admin"
                    className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-full text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                      <i className="fa-solid fa-gauge-high mr-2"></i> Admin
                  </Link>

                  <a href="#pricing" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 shadow-md hover:shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                      <i className="fa-solid fa-crown mr-1.5 sm:mr-2"></i> Get Pro
                  </a>
              </div>
          </div>
      </div>

      {/* Mobile Search Dropdown Area */}
      {isMobileSearchOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 animate-fade-in">
              <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fa-solid fa-search text-slate-400 focus-within:text-[#064E3B] transition-colors"></i>
                  </div>
                  <input 
                    type="text" 
                    value={searchQuery}
                    autoFocus
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] text-base transition-all duration-300 ease-in-out shadow-inner" 
                    placeholder="Search courses, notes, or authors..." 
                  />
              </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;
