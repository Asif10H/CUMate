import { useState, useEffect } from 'react';

export const useResources = () => {
  const [data, setData] = useState({ faculties: [], departments: [], resources: [] });
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  // Fetch initial data
  useEffect(() => {
    setIsLoading(true);
    fetch('/data.json')
      .then(res => res.json())
      .then(fetchedData => {
        // Simulate a slight network delay for premium feel
        setTimeout(() => {
          setData(fetchedData);
          setIsLoading(false);
        }, 600);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  }, []);

  // Derive filtered resources during render instead of using useEffect (Vercel Best Practice)
  let filteredResources = data.resources || [];

  if (selectedFaculty || selectedDepartment || selectedSemester || searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredResources = filteredResources.filter(r => {
      if (selectedFaculty && r.facultyId !== selectedFaculty) return false;
      if (selectedDepartment && r.departmentId !== selectedDepartment) return false;
      if (selectedSemester && r.semester !== selectedSemester) return false;
      if (searchQuery && !(
        r.title.toLowerCase().includes(q) || 
        r.course_code.toLowerCase().includes(q) || 
        r.author.toLowerCase().includes(q)
      )) return false;
      return true;
    });
  }

  const departmentsToDisplay = selectedFaculty 
    ? data.departments.filter(d => d.facultyId === selectedFaculty)
    : data.departments;

  return {
    data,
    setData,
    filteredResources,
    isLoading,
    departmentsToDisplay,
    filters: {
      selectedFaculty, setSelectedFaculty,
      selectedDepartment, setSelectedDepartment,
      searchQuery, setSearchQuery,
      selectedSemester, setSelectedSemester
    }
  };
};
