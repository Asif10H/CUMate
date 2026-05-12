import React, { useState, useEffect } from 'react';
import FormSelect from './FormSelect';

const Modal = ({ isOpen, onClose, activeTab, data, editingItem, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    } else {
      setFormData({});
    }
  }, [editingItem, isOpen]);

  if (!isOpen) return null;

  const getTitle = () => {
    if (editingItem) {
      switch (activeTab) {
        case 'resources': return 'Edit Resource';
        case 'faculties': return 'Edit Faculty';
        case 'departments': return 'Edit Department';
        default: return 'Edit Item';
      }
    } else {
      switch (activeTab) {
        case 'resources': return 'Add New Resource';
        case 'faculties': return 'Add New Faculty';
        case 'departments': return 'Add New Department';
        default: return 'Add New Item';
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let finalValue = type === 'checkbox' ? checked : value;
    if (name === 'isPremium') finalValue = value === 'true';
    if (name === 'semester') finalValue = parseInt(value, 10);
    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      title: formData.title || formData.name,
      name: formData.name || formData.title,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        ></div>

        {/* Modal Content */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in transform transition-all">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
                <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">{getTitle()}</h3>
                <button 
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer"
                >
                    <i className="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto dropdown-scrollbar">
                <form className="space-y-4" onSubmit={handleSaveClick}>
                    {/* Common Fields */}
                    {activeTab !== 'resources' && (
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                            <input name="name" value={formData.name || ''} onChange={handleChange} required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all outline-none" placeholder="Enter name..." />
                        </div>
                    )}
                    
                    {/* Department Specific */}
                    {activeTab === 'departments' && (
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Select Faculty</label>
                            <FormSelect 
                                name="facultyId"
                                value={formData.facultyId || ''}
                                onChange={handleChange}
                                options={data.faculties || []}
                                defaultText="Select a faculty..."
                                required
                            />
                        </div>
                    )}

                    {/* Resource Specific */}
                    {activeTab === 'resources' && (
                        <>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Resource Title</label>
                                <input name="title" value={formData.title || ''} onChange={handleChange} required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#064E3B]/20 outline-none" placeholder="e.g. Advanced Financial Accounting" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">PDF Download Link</label>
                                <input name="pdf_link" value={formData.pdf_link || ''} onChange={handleChange} type="url" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#064E3B]/20 outline-none" placeholder="e.g. https://example.com/demo.pdf" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Course Code</label>
                                    <input name="course_code" value={formData.course_code || ''} onChange={handleChange} required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#064E3B]/20 outline-none" placeholder="e.g. ACC-201" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Semester</label>
                                    <FormSelect 
                                        name="semester"
                                        value={formData.semester || 1}
                                        onChange={handleChange}
                                        options={[1,2,3,4,5,6,7,8].map(s => ({ id: s, name: `Semester ${s}` }))}
                                        defaultText="Select Semester"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Resource Type</label>
                                    <FormSelect 
                                        name="type"
                                        value={formData.type || 'Note'}
                                        onChange={handleChange}
                                        options={[
                                            { id: 'Note', name: 'Note' },
                                            { id: 'Slide', name: 'Slide' },
                                            { id: 'Question Bank', name: 'Question Bank' }
                                        ]}
                                        defaultText="Select Type"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Price / Premium</label>
                                    <FormSelect 
                                        name="isPremium"
                                        value={formData.isPremium ? 'true' : 'false'}
                                        onChange={handleChange}
                                        options={[
                                            { id: 'false', name: 'Free' },
                                            { id: 'true', name: 'Premium (Paid)' }
                                        ]}
                                        defaultText="Select Plan"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </form>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                <button 
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl font-bold text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                    Cancel
                </button>
                <button 
                    type="submit"
                    onClick={handleSaveClick}
                    className="px-5 py-2.5 rounded-xl font-bold text-white bg-[#064E3B] hover:bg-emerald-800 shadow-md transition-colors flex items-center cursor-pointer"
                >
                    <i className="fa-solid fa-check mr-2"></i> {editingItem ? 'Save Changes' : 'Add Entry'}
                </button>
            </div>
        </div>
    </div>
  );
};

export default Modal;
