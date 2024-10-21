import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { regNo: '', name: '', pt1: 'Present', pt2: 'Present', endSem: 'Present' },
  ]);

  const updateStudent = (index, field, value) => {
    const newStudents = [...students];
    newStudents[index][field] = value;
    setStudents(newStudents);
  };

  return (
    <StudentContext.Provider value={{ students, setStudents, updateStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
