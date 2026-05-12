import React from 'react';

const DataTable = ({ data, activeTab, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
        <div className="overflow-x-auto dropdown-scrollbar">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                        <th className="p-4 font-bold">ID</th>
                        <th className="p-4 font-bold">Title / Name</th>
                        {activeTab === 'resources' && (
                          <>
                            <th className="p-4 font-bold">Code</th>
                            <th className="p-4 font-bold">Type</th>
                            <th className="p-4 font-bold">Premium</th>
                            <th className="p-4 font-bold">Semester</th>
                          </>
                        )}
                        <th className="p-4 font-bold text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {data[activeTab]?.map(item => (
                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 text-sm text-slate-500 font-mono">{item.id}</td>
                            <td className="p-4 font-bold text-slate-900">{item.title || item.name}</td>
                            
                            {activeTab === 'resources' && (
                              <>
                                <td className="p-4 text-sm text-slate-600">
                                    <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold">{item.course_code}</span>
                                </td>
                                <td className="p-4 text-sm text-slate-600">{item.type}</td>
                                <td className="p-4">
                                    {item.isPremium ? (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-800 shadow-sm"><i className="fa-solid fa-crown text-[10px] mr-1"></i> Pro</span>
                                    ) : (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800 shadow-sm">Free</span>
                                    )}
                                </td>
                                <td className="p-4 text-sm text-slate-600 font-bold">Sem {item.semester}</td>
                              </>
                            )}

                            <td className="p-4 flex justify-end gap-2">
                                <button onClick={() => onEdit(item)} className="p-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer" title="Edit">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onClick={() => onDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors cursor-pointer" title="Delete">
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="p-4 border-t border-slate-200 text-sm text-slate-500 text-center bg-slate-50 font-medium">
            Showing all <span className="font-bold text-slate-700">{data[activeTab]?.length}</span> {activeTab}
        </div>
    </div>
  );
};

export default DataTable;
