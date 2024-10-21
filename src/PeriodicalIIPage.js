import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PeriodicalIPage.css';

function PeriodicalIPage() {
  const [students, setStudents] = useState([
    { regNo: '', name: '', co1Obtained: '', co2Obtained: '', co3Obtained: '', total: 0 },
  ]);

  const [totalStudents, setTotalStudents] = useState('');
  const [presentStudents, setPresentStudents] = useState('');

  const navigate = useNavigate();

  // Handle input change for student data
  const handleStudentChange = (index, field, value) => {
    const updatedStudents = students.map((student, i) => {
      if (i === index) {
        const updatedStudent = { ...student, [field]: value };

        // Recalculate the total marks if any CO marks are changed
        const co1 = parseInt(updatedStudent.co1Obtained) || 0;
        const co2 = parseInt(updatedStudent.co2Obtained) || 0;
        const co3 = parseInt(updatedStudent.co3Obtained) || 0;
        updatedStudent.total = co1 + co2 + co3;

        return updatedStudent;
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  // Add new student row
  const addStudentRow = () => {
    setStudents([
      ...students,
      { regNo: '', name: '', co1Obtained: '', co2Obtained: '', co3Obtained: '', total: 0 },
    ]);
  };

  // Handle form submission and navigate to the trackerI page
  const handleSubmit = () => {
    navigate('/trackerI');
  };

  return (
    <div className="periodical-page-container">
      <header className="periodical-header">
        <h1>Academic Performance Tracker - Periodical II</h1>
      </header>

      <div className="course-info">
        <div className="course-item">
          <label htmlFor="totalStudents">Total no. of students:</label>
          <input
            type="number"
            id="totalStudents"
            value={totalStudents}
            onChange={(e) => setTotalStudents(e.target.value)}
          />
        </div>
        <div className="course-item">
          <label htmlFor="presentStudents">No. of students present:</label>
          <input
            type="number"
            id="presentStudents"
            value={presentStudents}
            onChange={(e) => setPresentStudents(e.target.value)}
          />
        </div>
      </div>

      <table className="periodical-table">
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>Student Name</th>
            <th colSpan="3">Marks Obtained</th>
            <th>Total Marks</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>CO 1</th>
            <th>CO 2</th>
            <th>CO 3</th>
            <th></th>
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
                  placeholder="Marks Obtained"
                  value={student.co1Obtained}
                  onChange={(e) => handleStudentChange(index, 'co1Obtained', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Marks Obtained"
                  value={student.co2Obtained}
                  onChange={(e) => handleStudentChange(index, 'co2Obtained', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Marks Obtained"
                  value={student.co3Obtained}
                  onChange={(e) => handleStudentChange(index, 'co3Obtained', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.total}
                  readOnly
                  className="total-marks"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-student-button" onClick={addStudentRow}>
        Add Student
      </button>
      <button className="submit-button" onClick={handleSubmit}>
        Submit and View Performance Tracker
      </button>
    </div>
  );
}

export default PeriodicalIPage;
