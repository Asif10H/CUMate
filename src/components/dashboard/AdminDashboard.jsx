import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DataTable from './DataTable';
import Modal from './Modal';

const AdminDashboard = ({ data, setData }) => {
  const [activeTab, setActiveTab] = useState('resources'); // resources, faculties, departments
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // null if adding new

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setData(prev => ({
        ...prev,
        [activeTab]: prev[activeTab].filter(item => item.id !== id)
      }));
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleSave = (savedItem) => {
    if (editingItem) {
      // Update
      setData(prev => ({
        ...prev,
        [activeTab]: prev[activeTab].map(item => item.id === savedItem.id ? savedItem : item)
      }));
    } else {
      // Add
      setData(prev => ({
        ...prev,
        [activeTab]: [...prev[activeTab], { ...savedItem, id: `new_${Date.now()}` }]
      }));
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <main className="flex-1 ml-0 md:ml-64 p-4 md:p-8">
          <div className="flex justify-between items-center mb-8">
              <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 capitalize animate-fade-in">{activeTab} Management</h1>
                  <p className="text-slate-500 mt-1">Manage your data.json file entries dynamically.</p>
              </div>
              <button 
                onClick={handleAddNew}
                className="bg-[#064E3B] hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all flex items-center cursor-pointer transform hover:-translate-y-0.5"
              >
                  <i className="fa-solid fa-plus mr-2"></i> Add New {activeTab.slice(0, -1)}
              </button>
          </div>

          <DataTable 
            data={data} 
            activeTab={activeTab} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        activeTab={activeTab} 
        data={data}
        editingItem={editingItem}
        onSave={handleSave}
      />
    </div>
  );
};

export default AdminDashboard;
