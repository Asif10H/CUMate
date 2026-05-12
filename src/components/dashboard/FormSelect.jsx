import React, { useState, useRef, useEffect } from 'react';

const FormSelect = ({ name, value, onChange, options, defaultText, required }) => {
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
  }, []);

  const selectedOption = options.find(opt => String(opt.id) === String(value));
  const displayText = selectedOption ? selectedOption.name : defaultText;

  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      {/* Hidden native select for form compatibility if needed, though not strictly required if we just call onChange */}
      {required && (
          <input type="text" className="absolute opacity-0 w-0 h-0" required={required} value={value || ''} onChange={() => {}} />
      )}
      
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 rounded-xl border ${isOpen ? 'border-[#064E3B] ring-2 ring-[#064E3B]/20' : 'border-slate-300'} bg-white text-left cursor-pointer transition-all flex items-center justify-between ${value ? 'text-slate-900' : 'text-slate-500'}`}
      >
        <span className="block truncate">{displayText}</span>
        <i className={`fa-solid fa-chevron-down text-sm text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2 max-h-60 overflow-y-auto dropdown-scrollbar animate-fade-in">
          {defaultText && !required && (
            <div 
              onClick={() => handleSelect('')}
              className={`mx-2 my-1 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors flex items-center ${value === '' ? 'bg-[#064E3B]/10 text-[#064E3B] font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {value === '' && <i className="fa-solid fa-check mr-2 text-[#064E3B]"></i>}
              <span className={value === '' ? '' : 'ml-6'}>{defaultText}</span>
            </div>
          )}
          
          {options.map(opt => {
            const isSelected = String(value) === String(opt.id);
            return (
              <div 
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`mx-2 my-1 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors flex items-center ${isSelected ? 'bg-[#064E3B] text-white font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {isSelected && <i className="fa-solid fa-check mr-2 text-white"></i>}
                <span className={isSelected ? '' : 'ml-6'}>{opt.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FormSelect;
