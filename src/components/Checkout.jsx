import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Checkout = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [step, setStep] = useState(1); // 1: Initial, 2: OTP, 3: PIN, 4: Success
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id === 'pro') {
      setResource({
        id: 'pro',
        title: 'CUMate Pro Subscription',
        course_code: 'ALL',
        type: 'Membership',
        author: 'CUMate',
        price: 299,
        pdf_link: '/' // Redirect to home or dashboard after upgrading
      });
      return;
    }

    if (id === '4year') {
      setResource({
        id: '4year',
        title: 'Full 4-Year Access',
        course_code: 'ALL SEMESTERS',
        type: 'Full Access',
        author: 'CUMate',
        price: 2199,
        pdf_link: '/'
      });
      return;
    }

    if (data && data.resources) {
      const found = data.resources.find(r => String(r.id) === id);
      if (found) {
        setResource(found);
      }
    }
  }, [id, data]);

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e2136e]"></div>
      </div>
    );
  }

  const handleNext = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(prev => prev + 1);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <Link to="/" className="mb-8 flex items-center text-slate-500 hover:text-[#064E3B] transition-colors font-bold group">
        <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> Back to Hub
      </Link>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Order Summary */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl mr-4">
              <i className="fa-solid fa-crown"></i>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">Order Summary</h2>
              <p className="text-sm font-medium text-slate-500">Premium Resource Access</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
            <h3 className="text-lg font-bold text-slate-800 mb-2">{resource.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block px-2.5 py-1 bg-white text-slate-600 text-xs font-bold uppercase tracking-wider rounded border border-slate-200">
                {resource.course_code}
              </span>
              <span className="inline-block px-2.5 py-1 bg-white text-slate-500 text-xs font-bold uppercase tracking-wider rounded border border-slate-200">
                {resource.type}
              </span>
            </div>
            <div className="flex items-center text-sm font-medium text-slate-500 border-t border-slate-200 pt-4 mt-2">
              <i className="fa-solid fa-user text-slate-400 mr-2"></i> Author: {resource.author}
            </div>
          </div>

          <div className="flex-grow"></div>

          <div className="border-t border-slate-200 pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-500 font-medium">Subtotal</span>
              <span className="text-slate-900 font-bold">৳{resource.price}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-500 font-medium">Platform Fee</span>
              <span className="text-slate-900 font-bold">৳0.00</span>
            </div>
            <div className="flex justify-between items-center text-xl">
              <span className="font-extrabold text-slate-900">Total</span>
              <span className="font-black text-[#e2136e]">৳{resource.price}</span>
            </div>
          </div>
        </div>

        {/* bKash Payment Gateway */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 relative animate-fade-in">
          
          {/* Header */}
          <div className="bg-[#e2136e] p-6 text-center text-white relative">
            {/* bKash Logo Simulation */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner">
                <i className="fa-solid fa-paper-plane text-[#e2136e] text-xl transform -rotate-12"></i>
              </div>
              <h2 className="text-3xl font-black tracking-tight">bKash</h2>
            </div>
            <div className="bg-white/20 inline-block px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm shadow-sm">
              <i className="fa-solid fa-cart-shopping mr-2"></i> CUMate
            </div>
          </div>

          {/* Payment Steps */}
          <div className="p-8">
            {step === 4 ? (
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <i className="fa-solid fa-check text-4xl text-green-500"></i>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Payment Successful!</h3>
                <p className="text-slate-500 font-medium mb-8">
                  {id === 'pro' || id === '4year'
                    ? `Welcome to CUMate ${id === '4year' ? 'Full 4-Year Access' : 'Pro'}! Your account has been upgraded successfully. You now have unlimited access.`
                    : "Your transaction was completed successfully. You now have access to this premium resource."
                  }
                </p>
                {id === 'pro' || id === '4year' ? (
                  <Link 
                    to="/" 
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#D4AF37] text-slate-900 text-lg font-bold rounded-xl shadow-md hover:bg-yellow-400 transition-colors"
                  >
                    <i className="fa-solid fa-house mr-2"></i> Return Home
                  </Link>
                ) : (
                  <a 
                    href={resource.pdf_link || "/demo.pdf"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    download 
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#064E3B] text-white text-lg font-bold rounded-xl shadow-md hover:bg-emerald-800 transition-colors"
                  >
                    <i className="fa-solid fa-cloud-arrow-down mr-2"></i> Download Resource
                  </a>
                )}
              </div>
            ) : (
              <form onSubmit={handleNext} className="animate-fade-in">
                <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                  <span className="text-slate-500 font-bold">Amount to Pay</span>
                  <span className="text-2xl font-black text-[#e2136e]">৳{resource.price}</span>
                </div>

                {step === 1 && (
                  <div className="mb-6 animate-fade-in">
                    <label className="block text-sm font-bold text-slate-700 mb-2 text-center">Your bKash Account Number</label>
                    <input 
                      type="text" 
                      required 
                      autoFocus
                      placeholder="e.g 017XXXXXXX" 
                      className="w-full text-center px-4 py-4 text-lg tracking-widest rounded-xl border-2 border-slate-200 focus:ring-4 focus:ring-[#e2136e]/20 focus:border-[#e2136e] outline-none transition-all font-bold text-slate-900"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="mb-6 animate-fade-in">
                    <label className="block text-sm font-bold text-slate-700 mb-2 text-center">Enter 6-digit Verification Code (OTP)</label>
                    <p className="text-xs text-center text-slate-400 mb-4">A code has been sent to {phone}</p>
                    <input 
                      type="text" 
                      required 
                      autoFocus
                      maxLength={6}
                      placeholder="XXXXXX" 
                      className="w-full text-center px-4 py-4 text-2xl tracking-[0.5em] rounded-xl border-2 border-slate-200 focus:ring-4 focus:ring-[#e2136e]/20 focus:border-[#e2136e] outline-none transition-all font-bold text-slate-900"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="mb-6 animate-fade-in">
                    <label className="block text-sm font-bold text-slate-700 mb-2 text-center">Enter bKash PIN</label>
                    <input 
                      type="password" 
                      required 
                      autoFocus
                      maxLength={5}
                      placeholder="•••••" 
                      className="w-full text-center px-4 py-4 text-2xl tracking-[0.5em] rounded-xl border-2 border-slate-200 focus:ring-4 focus:ring-[#e2136e]/20 focus:border-[#e2136e] outline-none transition-all font-bold text-slate-900"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  <button 
                    type="button" 
                    onClick={() => navigate(-1)}
                    className="w-1/3 py-4 text-slate-600 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-2/3 py-4 bg-[#e2136e] hover:bg-[#c51060] text-white font-bold rounded-xl shadow-md transition-colors flex justify-center items-center disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      step === 3 ? 'Confirm Payment' : 'Proceed'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
            <i className="fa-solid fa-shield-halved mr-1.5"></i> Secure Payment Processing
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
