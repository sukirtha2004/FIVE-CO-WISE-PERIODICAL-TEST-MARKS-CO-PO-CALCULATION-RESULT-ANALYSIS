import React, { useState } from 'react';
import './EndsemTrackerPage.css';

function PerformanceTracker() {
  // Initializing students state with CO1, CO2, CO3, CO4, CO5 fields for end semester
  const [students, setStudents] = useState([
    { regNo: '', name: '', co1: '', co2: '', co3: '', co4: '', co5: '', total: '' },
    { regNo: '', name: '', co1: '', co2: '', co3: '', co4: '', co5: '', total: '' },
    // Add more student objects as needed
  ]);

  // Handle field changes and update the students array
  const handleChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;

    // Calculate total marks (sum of CO1, CO2, CO3, CO4, CO5)
    if (['co1', 'co2', 'co3', 'co4', 'co5'].includes(field)) {
      const co1 = parseFloat(updatedStudents[index].co1) || 0;
      const co2 = parseFloat(updatedStudents[index].co2) || 0;
      const co3 = parseFloat(updatedStudents[index].co3) || 0;
      const co4 = parseFloat(updatedStudents[index].co4) || 0;
      const co5 = parseFloat(updatedStudents[index].co5) || 0;
      updatedStudents[index].total = co1 + co2 + co3 + co4 + co5;
    }

    setStudents(updatedStudents);
  };

  // Add new student entry row
  const addStudent = () => {
    setStudents([...students, { regNo: '', name: '', co1: '', co2: '', co3: '', co4: '', co5: '', total: '' }]);
  };

  return (
    <div className="tracker-container">
      <header className="tracker-header">
        <h1>End Semester Performance Tracker</h1>
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

      {/* Add Student Button */}
      <button onClick={addStudent} className="add-student-btn">Add Student</button>

      {/* Performance Table */}
      <table className="performance-table">
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>Student Name</th>
            <th>CO I attainment level</th>
            <th>CO II attainment level</th>
            <th>CO III attainment level</th>
            <th>CO IV attainment level</th>
            <th>CO V attainment level</th>
            <th>Total Marks</th>
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
                  type="number"
                  value={student.co1}
                  onChange={(e) => handleChange(index, 'co1', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.co2}
                  onChange={(e) => handleChange(index, 'co2', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.co3}
                  onChange={(e) => handleChange(index, 'co3', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.co4}
                  onChange={(e) => handleChange(index, 'co4', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.co5}
                  onChange={(e) => handleChange(index, 'co5', e.target.value)}
                />
              </td>
              <td>
                {/* Display total marks */}
                <input type="number" value={student.total} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PerformanceTracker;
