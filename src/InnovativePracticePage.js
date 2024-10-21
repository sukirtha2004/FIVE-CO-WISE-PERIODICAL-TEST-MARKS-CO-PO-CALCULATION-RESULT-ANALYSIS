import React, { useState } from 'react';
import './InnovativePracticePage.css';

function InnovativePracticePage() {
  const [students, setStudents] = useState([
    { regNo: '', name: '', ip1Obtained: '', ip2Obtained: '', total: 0 },
  ]);

  const [facultyName, setFacultyName] = useState('');
  const [courseCode, setCourseCode] = useState('');

  const handleStudentChange = (index, field, value) => {
    const updatedStudents = students.map((student, i) => {
      if (i === index) {
        const updatedStudent = { ...student, [field]: value };
        
        // Recalculate total marks based on Innovative Practice scores
        if (field === 'ip1Obtained' || field === 'ip2Obtained') {
          const ip1 = parseInt(updatedStudent.ip1Obtained) || 0;
          const ip2 = parseInt(updatedStudent.ip2Obtained) || 0;
          updatedStudent.total = ip1 + ip2;
        }

        return updatedStudent;
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const addStudentRow = () => {
    setStudents([
      ...students,
      { regNo: '', name: '', ip1Obtained: '', ip2Obtained: '', total: 0 },
    ]);
  };

  return (
    <div className="innovative-practice-page-container">
      <header className="page-header">
        <h1>Academic Performance Tracker - Innovative Practice</h1>
      </header>

      <div className="faculty-course-info">
        <div className="info-item">
          <label>Faculty Name:</label>
          <input
            type="text"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
          />
        </div>
        <div className="info-item">
          <label>Course code - Name:</label>
          <input
            type="text"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
          />
        </div>
      </div>

      <table className="performance-table">
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>Student Name</th>
            <th>IP I (50)</th>
            <th>IP II (20)</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  placeholder="Enter Reg. No"
                  value={student.regNo}
                  onChange={(e) => handleStudentChange(index, 'regNo', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Student Name"
                  value={student.name}
                  onChange={(e) => handleStudentChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="IP I Marks"
                  value={student.ip1Obtained}
                  onChange={(e) => handleStudentChange(index, 'ip1Obtained', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="IP II Marks"
                  value={student.ip2Obtained}
                  onChange={(e) => handleStudentChange(index, 'ip2Obtained', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.total}
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-student-button" onClick={addStudentRow}>
        Add Student
      </button>
    </div>
  );
}

export default InnovativePracticePage;
