import React from 'react';
import Select from './Select';

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="currentColor" points="0,100 100,0 100,100"/>
          </svg>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-950 rounded-full blur-3xl opacity-50"></div>
  </div>
);

const Hero = ({ 
  faculties, 
  departmentsToDisplay, 
  selectedFaculty, 
  setSelectedFaculty, 
  selectedDepartment, 
  setSelectedDepartment 
}) => {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pb-24 bg-[#064E3B] text-white relative z-30">
        
        {/* Background elements container with overflow-hidden to prevent horizontal scroll */}
        <HeroBackground />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-40">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-6 drop-shadow-md">
                Premium Academic Repository
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-emerald-100 sm:text-xl md:mt-5 md:max-w-2xl leading-relaxed">
                The ultimate study companion for Chittagong University students. Access top-tier notes, curated slides, and comprehensive question banks.
            </p>
            
            <div className="mt-12 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 justify-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl">
                <Select
                  id="faculty-select"
                  label="Faculty"
                  icon="fa-university"
                  value={selectedFaculty}
                  onChange={(e) => {
                    setSelectedFaculty(e.target.value);
                    setSelectedDepartment(''); 
                  }}
                  options={faculties}
                  defaultText="All Faculties"
                />
                
                <Select
                  id="department-select"
                  label="Department"
                  icon="fa-building"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  options={departmentsToDisplay}
                  defaultText="All Departments"
                />
            </div>
        </div>
    </div>
  );
};

export default Hero;
