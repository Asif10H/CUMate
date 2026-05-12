import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-20 border-t border-slate-200 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 bg-white px-4">
            <i className="fa-solid fa-gem text-3xl text-[#D4AF37] drop-shadow"></i>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
                    Invest in Your Academic Success
                </h2>
                <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                    Choose the plan that fits your study needs. Upgrade to Pro for unlimited access to our entire premium repository.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                <div className="bg-slate-50 rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-all duration-300 h-full">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Tier</h3>
                    <p className="text-slate-500 mb-6 text-sm flex-grow">Essential resources to get you started.</p>
                    <div className="mb-6 pb-6 border-b border-slate-200">
                        <span className="text-5xl font-extrabold text-slate-900">Free</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow text-sm font-medium">
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-0.5 mr-3 text-lg"></i>
                            <span className="text-slate-700">Access to all free notes & slides</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-0.5 mr-3 text-lg"></i>
                            <span className="text-slate-700">Community discussion forums</span>
                        </li>
                        <li className="flex items-start opacity-50">
                            <i className="fa-solid fa-xmark-circle text-slate-400 mt-0.5 mr-3 text-lg"></i>
                            <span className="text-slate-500">No premium downloads</span>
                        </li>
                    </ul>
                    <button className="w-full bg-white hover:bg-slate-100 border-2 border-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl transition-colors cursor-pointer">
                        Current Plan
                    </button>
                </div>

                <div className="bg-[#064E3B] rounded-3xl shadow-2xl border border-emerald-700 p-8 flex flex-col relative transform md:-translate-y-6 h-[105%] z-10">
                    <div className="absolute top-0 right-0 -mr-3 -mt-3 animate-bounce">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#D4AF37] text-slate-900 shadow-lg">
                            <i className="fa-solid fa-fire mr-1.5"></i> Most Popular
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">CUMate Pro</h3>
                    <p className="text-emerald-200 mb-6 text-sm flex-grow">Unlimited power for serious students.</p>
                    <div className="mb-6 pb-6 border-b border-emerald-800/50">
                        <span className="text-5xl font-extrabold text-white">৳299</span>
                        <span className="text-emerald-300 font-medium">/Semester</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow text-sm font-medium">
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-[#D4AF37] mt-0.5 mr-3 text-lg"></i>
                            <span className="text-emerald-50">Unlimited premium downloads</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-[#D4AF37] mt-0.5 mr-3 text-lg"></i>
                            <span className="text-emerald-50">Exclusive previous year question banks</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-[#D4AF37] mt-0.5 mr-3 text-lg"></i>
                            <span className="text-emerald-50">100% Ad-free experience</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-[#D4AF37] mt-0.5 mr-3 text-lg"></i>
                            <span className="text-emerald-50">Priority email support</span>
                        </li>
                    </ul>
                    <Link to="/checkout/pro" className="w-full inline-block text-center bg-[#D4AF37] hover:bg-yellow-400 text-slate-900 font-extrabold py-3.5 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
                        Upgrade to Pro
                    </Link>
                </div>

                <div className="bg-slate-50 rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-all duration-300 h-full">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Full 4-Year Access</h3>
                    <p className="text-slate-500 mb-6 text-sm flex-grow">Complete coverage for your entire university journey.</p>
                    <div className="mb-6 pb-6 border-b border-slate-200">
                        <span className="text-5xl font-extrabold text-slate-900">৳2199</span>
                        <span className="text-slate-500 font-medium">/4 Years</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow text-sm font-medium">
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-0.5 mr-3 text-lg"></i>
                            <span className="text-slate-700">Access all 8 semesters of resources</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-0.5 mr-3 text-lg"></i>
                            <span className="text-slate-700">One-time payment, no renewals</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-0.5 mr-3 text-lg"></i>
                            <span className="text-slate-700">Instant download via bKash</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-0.5 mr-3 text-lg"></i>
                            <span className="text-slate-700">Lifetime access to all materials</span>
                        </li>
                    </ul>
                    <Link to="/checkout/4year" className="w-full text-center bg-white hover:bg-[#064E3B] hover:text-white text-[#064E3B] border-2 border-[#064E3B] font-bold py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer block">
                        Get Full Access
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Pricing;
