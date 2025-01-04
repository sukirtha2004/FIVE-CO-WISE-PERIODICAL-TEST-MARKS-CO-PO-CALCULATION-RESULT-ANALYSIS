import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [courseCode, setCourseCode] = useState('');
  const [totalStudents, setTotalStudents] = useState(0);

  const countPresent = (evaluation) =>
    students.filter((student) => student[evaluation] === 'Present').length;

  const periodical1PresentCount = countPresent('periodical1');
  const periodical2PresentCount = countPresent('periodical2');
  const endSemesterPresentCount = countPresent('endSemester');

  return (
    <AppContext.Provider
      value={{
        students,
        setStudents,
        courseCode,
        setCourseCode,
        totalStudents,
        setTotalStudents,
        periodical1PresentCount,
        periodical2PresentCount,
        endSemesterPresentCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
