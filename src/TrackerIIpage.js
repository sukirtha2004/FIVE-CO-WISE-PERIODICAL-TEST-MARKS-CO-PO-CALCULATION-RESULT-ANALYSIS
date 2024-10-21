import React, { useState } from 'react';
import './TrackerPage.css';

function PerformanceTracker() {
  const [students, setStudents] = useState([
    { regNo: '', name: '', co3: '', co4: '', co5: '' },
    { regNo: '', name: '', co3: '', co4: '', co5: '' },
    { regNo: '', name: '', co3: '', co4: '', co5: '' },
    // Add more student objects as needed
  ]);

  const handleChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  const addStudent = () => {
    setStudents([...students, { regNo: '', name: '', co3: '', co4: '', co5: '' }]);
  };

  return (
    <div className="tracker-container">
      <header className="tracker-header">
        <h1>Academic Performance Tracker</h1>
      </header>
      <div className="faculty-course">
        <div className="input-group">
          <label>Target CO%:</label>
          <input type="number" placeholder="Enter target CO%" />
        </div>
        <div className="input-group">
          <label>Total no. of students:</label>
          <input type="number" value={students.length} readOnly />
        </div>
        <div className="input-group">
          <label>No. of students present:</label>
          <input type="number" placeholder="Enter no. of students present" />
        </div>
      </div>
      <button onClick={addStudent} className="add-student-btn">Add Student</button>
      <table className="performance-table">
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>Student Name</th>
            <th>CO III attainment level</th>
            <th>CO IV attainment level</th>
            <th>CO V attainment level</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={student.regNo}
                  onChange={(e) => handleChange(index, 'regNo', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.co1}
                  onChange={(e) => handleChange(index, 'co1', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.co2}
                  onChange={(e) => handleChange(index, 'co2', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.co3}
                  onChange={(e) => handleChange(index, 'co3', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PerformanceTracker;
