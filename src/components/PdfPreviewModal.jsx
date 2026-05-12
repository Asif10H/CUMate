import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const WatermarkOverlay = () => (
  <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center opacity-10">
    <div className="transform -rotate-45 space-y-24">
      <h1 className="text-8xl font-black text-slate-900 whitespace-nowrap">PREVIEW ONLY</h1>
      <h1 className="text-8xl font-black text-slate-900 whitespace-nowrap">CUMate</h1>
      <h1 className="text-8xl font-black text-slate-900 whitespace-nowrap">PREVIEW ONLY</h1>
    </div>
  </div>
);

const StaticDocumentContent = () => (
  <div className="space-y-6 text-left leading-relaxed font-serif text-slate-700 tracking-wide text-lg border-x-8 border-transparent px-2">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
    </p>
    <h3 className="text-xl font-bold mt-8 mb-4">1. Introduction</h3>
    <p>
      Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.
    </p>
    <div className="bg-slate-50 p-6 border-l-4 border-[#064E3B] my-6 italic text-slate-700">
      "This is an incredibly important core concept for the upcoming examination. Make sure to understand the fundamental principles outlined in this section before proceeding."
    </div>
    <h3 className="text-xl font-bold mt-8 mb-4">2. Core Concepts</h3>
    <p>
      In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit.
    </p>
    <div className="h-40 w-full bg-slate-100 border border-slate-200 mt-6 flex items-center justify-center text-slate-400 font-bold">
      [ Figure 1.1 Diagram Details ]
    </div>
  </div>
);

const PdfPreviewModal = ({ isOpen, onClose, resource }) => {
  if (!isOpen || !resource) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>


      {/* Modal Content */}
      <div className="relative bg-slate-100 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in border border-slate-300">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
          <div>
            <h3 className="text-lg font-bold text-slate-800 line-clamp-1">{resource.title} - Preview</h3>
            <p className="text-sm text-slate-500 font-medium">Showing 1 of 45 pages</p>
          </div>
          <div className="flex gap-3">
            <Link 
              to={`/checkout/${resource.id}`}
              className="px-4 py-2 bg-[#D4AF37] hover:bg-yellow-500 text-slate-900 text-sm font-bold rounded-lg shadow-sm transition-colors flex items-center"
            >
              <i className="fa-solid fa-unlock mr-2"></i> Unlock Full PDF
            </Link>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        {/* PDF Viewer Body Simulation */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center bg-slate-200 dropdown-scrollbar relative">
          
          {/* Simulated PDF Page */}
          <div className="bg-white w-full max-w-2xl min-h-[800px] shadow-lg rounded-sm relative overflow-hidden select-none">
            
            {/* Watermark Overlay */}
            <WatermarkOverlay />

            {/* Simulated Document Content */}
            <div className="p-12 text-slate-800">
              <div className="border-b-2 border-slate-300 pb-6 mb-8 text-center">
                <h1 className="text-3xl font-extrabold mb-2">{resource.title}</h1>
                <h2 className="text-xl text-slate-600 font-bold">{resource.course_code}</h2>
                <p className="text-slate-500 mt-2">Author: {resource.author}</p>
              </div>

              <StaticDocumentContent />
            </div>

            {/* Blurred bottom to signify cut-off */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-20 flex items-end justify-center pb-8">
              <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-slate-200 text-center animate-bounce mt-10">
                <p className="text-slate-600 font-bold mb-2">Want to read the rest?</p>
                <Link 
                  to={`/checkout/${resource.id}`}
                  className="inline-block px-6 py-2 bg-[#D4AF37] hover:bg-yellow-500 text-slate-900 font-extrabold rounded-lg transition-colors"
                >
                  Unlock Full PDF for ৳{resource.price}
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default PdfPreviewModal;
