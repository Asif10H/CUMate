import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResourceGrid from './components/ResourceGrid';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AdminDashboard from './components/dashboard/AdminDashboard';
import Checkout from './components/Checkout';
import { useResources } from './hooks/useResources';

function App() {
  const { data, setData, filteredResources, isLoading, departmentsToDisplay, filters } = useResources();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hideLayout = location.pathname === '/admin' || location.pathname.startsWith('/checkout');

  return (
    <>
      {!hideLayout && (
        <Navbar 
          scrolled={scrolled} 
          searchQuery={filters.searchQuery} 
          setSearchQuery={filters.setSearchQuery} 
        />
      )}

      <Routes>
        <Route path="/admin" element={<AdminDashboard data={data} setData={setData} />} />
        <Route path="/checkout/:id" element={<Checkout data={data} />} />
        <Route path="/" element={
          <>
            <Hero 
              faculties={data.faculties}
              departmentsToDisplay={departmentsToDisplay}
              selectedFaculty={filters.selectedFaculty}
              setSelectedFaculty={filters.setSelectedFaculty}
              selectedDepartment={filters.selectedDepartment}
              setSelectedDepartment={filters.setSelectedDepartment}
            />

            {isLoading ? (
              <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative -mt-8 z-20 bg-white rounded-2xl shadow-sm border border-slate-200">
                <Loader />
              </main>
            ) : (
              <ResourceGrid 
                resources={filteredResources} 
                selectedSemester={filters.selectedSemester}
                setSelectedSemester={filters.setSelectedSemester}
              />
            )}

            <Pricing />
          </>
        } />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  )
}

export default App;
