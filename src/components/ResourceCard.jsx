import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PdfPreviewModal from './PdfPreviewModal';

const getTypeIcon = (type) => {
  const baseClass = "text-xl transition-transform group-hover:scale-110 duration-300 ";
  switch(type) {
    case 'Note': 
      return <i className={`fa-solid fa-file-lines ${baseClass} text-blue-500`}></i>;
    case 'Slide': 
      return <i className={`fa-solid fa-file-powerpoint ${baseClass} text-orange-500`}></i>;
    case 'Question Bank': 
      return <i className={`fa-solid fa-layer-group ${baseClass} text-purple-500`}></i>;
    default: 
      return <i className={`fa-solid fa-file ${baseClass} text-slate-500`}></i>;
  }
};

const getTypeColor = (type) => {
  return type === 'Note' ? 'bg-blue-500' : type === 'Slide' ? 'bg-orange-500' : 'bg-purple-500';
};

const ResourceCard = ({ resource }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col overflow-hidden group transform hover:-translate-y-1 relative animate-fade-in">
        <div className={`h-1 w-full ${getTypeColor(resource.type)}`}></div>
        <div className="p-6 flex flex-col h-full">
            
            <div className="flex justify-between items-start mb-5">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 shadow-inner">
                    {getTypeIcon(resource.type)}
                </div>
                {resource.isPremium ? (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                      <i className="fa-solid fa-crown mr-1.5 text-yellow-600"></i> PRO
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm">
                      FREE
                  </span>
                )}
            </div>
            
            <div className="mb-2">
                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200 mb-2">
                    {resource.course_code}
                </span>
                <span className="inline-block px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-100 mb-2 ml-1">
                    {resource.type}
                </span>
            </div>
            
            <h3 className="text-lg font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-[#064E3B] transition-colors line-clamp-2">{resource.title}</h3>
            
            <div className="mt-auto pt-4 mb-5 flex items-center text-sm font-medium text-slate-500 border-t border-slate-100">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center mr-2 text-xs text-slate-600">
                    <i className="fa-solid fa-user"></i>
                </div>
                {resource.author}
            </div>
            
            {resource.isPremium ? (
              <div className="mt-auto flex gap-2">
                <button 
                  onClick={() => setIsPreviewOpen(true)}
                  className="w-1/3 flex items-center justify-center py-3 border-2 border-[#D4AF37] text-sm font-bold rounded-xl text-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-900 transition-colors cursor-pointer"
                  title="Preview Document"
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
                <Link to={`/checkout/${resource.id}`} className="w-2/3 flex items-center justify-center px-4 py-3 border border-transparent text-sm font-bold rounded-xl text-slate-900 bg-[#D4AF37] hover:bg-yellow-500 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                    <i className="fa-solid fa-unlock-keyhole mr-2"></i> Unlock - ৳{resource.price}
                </Link>
              </div>
            ) : (
              <a href={resource.pdf_link || "/demo.pdf"} target="_blank" rel="noopener noreferrer" className="w-full mt-auto flex items-center justify-center px-4 py-3 border-2 border-[#064E3B] text-sm font-bold rounded-xl text-[#064E3B] bg-transparent hover:bg-[#064E3B] hover:text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                  <i className="fa-solid fa-cloud-arrow-down mr-2"></i> Download
              </a>
            )}
        </div>
        
        <PdfPreviewModal 
            isOpen={isPreviewOpen} 
            onClose={() => setIsPreviewOpen(false)} 
            resource={resource} 
        />
    </div>
  );
};

export default ResourceCard;
