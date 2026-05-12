import React, { useState, useRef, useEffect } from 'react';

const Select = ({ id, label, icon, value, onChange, options, defaultText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  // Find the selected option's name for display, or show defaultText
  const selectedOption = options.find(opt => opt.id === value);
  const displayText = selectedOption ? selectedOption.name : defaultText;

  const handleSelect = (val) => {
    onChange({ target: { value: val } });
    setIsOpen(false);
  };

  return (
    <div className="flex-1 relative" ref={wrapperRef}>
      <label htmlFor={id} className="sr-only">{label}</label>
      
      {/* Custom Select Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative block w-full pl-11 pr-10 py-3.5 text-base text-left ${value ? 'text-slate-900 font-bold' : 'text-slate-600 font-semibold'} border ${isOpen ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30' : 'border-transparent'} sm:text-sm rounded-xl bg-white/95 hover:bg-white cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg`}
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <i className={`fa-solid ${icon} ${value ? 'text-[#064E3B]' : 'text-slate-400'} transition-colors`}></i>
        </div>
        
        <span className="block truncate">{displayText}</span>
        
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
          <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#064E3B]' : ''}`}></i>
        </div>
      </div>

      {/* Dropdown Options List */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden py-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-[#064E3B]/20 scrollbar-track-transparent">
          <div 
            onClick={() => handleSelect('')}
            className={`mx-2 my-1 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors flex items-center ${value === '' ? 'bg-[#064E3B]/10 text-[#064E3B] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            {value === '' && <i className="fa-solid fa-check mr-2 text-[#064E3B]"></i>}
            <span className={value === '' ? '' : 'ml-6'}>{defaultText}</span>
          </div>
          {options.map(opt => (
            <div 
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`mx-2 my-1 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors flex items-center ${value === opt.id ? 'bg-[#064E3B] text-white font-bold shadow-md' : 'text-slate-700 hover:bg-[#064E3B]/10 hover:text-[#064E3B]'}`}
            >
              {value === opt.id && <i className="fa-solid fa-check mr-2 text-white"></i>}
              <span className={value === opt.id ? '' : 'ml-6'}>{opt.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
