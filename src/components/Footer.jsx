import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
                <i className="fa-solid fa-graduation-cap text-slate-500 text-2xl mr-3"></i>
                <div>
                    <span className="font-bold text-lg text-slate-200 block">CUMate</span>
                    <span className="text-xs">Dedicated to Chittagong University Students</span>
                </div>
            </div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-facebook fa-lg"></i></a>
                <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-twitter fa-lg"></i></a>
                <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-discord fa-lg"></i></a>
            </div>
            <div className="text-sm font-medium text-slate-500">
                &copy; 2026 CUMate. All rights reserved.
            </div>
        </div>
    </footer>
  );
};

export default Footer;
