import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-[#064E3B] text-white flex flex-col fixed h-full shadow-2xl z-20">
        <div className="p-6 border-b border-emerald-800">
            <Link to="/" className="flex items-center cursor-pointer">
                <i className="fa-solid fa-graduation-cap text-2xl mr-3 text-[#D4AF37]"></i>
                <span className="font-extrabold text-xl tracking-tight">Admin Hub</span>
            </Link>
            <p className="text-emerald-300 text-xs mt-2">Data Management Panel</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
            <button 
                onClick={() => setActiveTab('resources')}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all font-bold ${activeTab === 'resources' ? 'bg-[#D4AF37] text-[#064E3B]' : 'hover:bg-emerald-800 text-emerald-100 cursor-pointer'}`}
            >
                <i className="fa-solid fa-file-lines w-6"></i> Resources
            </button>
            <button 
                onClick={() => setActiveTab('faculties')}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all font-bold ${activeTab === 'faculties' ? 'bg-[#D4AF37] text-[#064E3B]' : 'hover:bg-emerald-800 text-emerald-100 cursor-pointer'}`}
            >
                <i className="fa-solid fa-university w-6"></i> Faculties
            </button>
            <button 
                onClick={() => setActiveTab('departments')}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all font-bold ${activeTab === 'departments' ? 'bg-[#D4AF37] text-[#064E3B]' : 'hover:bg-emerald-800 text-emerald-100 cursor-pointer'}`}
            >
                <i className="fa-solid fa-building w-6"></i> Departments
            </button>
        </nav>
        
        <div className="p-4 border-t border-emerald-800">
            <Link 
                to="/"
                className="w-full flex items-center justify-center px-4 py-3 bg-white hover:bg-slate-100 text-[#064E3B] font-bold rounded-xl transition-all cursor-pointer"
            >
                <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i> Exit Admin
            </Link>
        </div>
    </aside>
  );
};

export default Sidebar;
