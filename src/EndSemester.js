import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EndSemester.css';

const EndSemesterPage = () => {
  const [students, setStudents] = useState([{ regNo: '', name: '', co1: '', co2: '', co3: '', co4: '', co5: '', total: '' }]);
  const [totalStudents, setTotalStudents] = useState('');
  const [presentStudents, setPresentStudents] = useState('');
  const navigate = useNavigate();

  const calculateTotal = (student) => {
    const co1 = parseInt(student.co1) || 0;
    const co2 = parseInt(student.co2) || 0;
    const co3 = parseInt(student.co3) || 0;
    const co4 = parseInt(student.co4) || 0;
    const co5 = parseInt(student.co5) || 0;
    return co1 + co2 + co3 + co4 + co5;
  };

  const handleStudentChange = (index, field, value) => {
    const updatedStudents = students.map((student, i) => {
      if (i === index) {
        const updatedStudent = { ...student, [field]: value };
        if (['co1', 'co2', 'co3', 'co4', 'co5'].includes(field)) {
          updatedStudent.total = calculateTotal(updatedStudent);
        }
        return updatedStudent;
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const addStudentRow = () => {
    setStudents([...students, { regNo: '', name: '', co1: '', co2: '', co3: '', co4: '', co5: '', total: '' }]);
  };

  const handleSubmit = () => {
    navigate('/endsemtracker');
  };

  return (
    <div className="endsemester-page-container">
      <header className="endsemester-header">
        <h1>Academic Performance Tracker - End Semester</h1>
      </header>

      <div className="course-info">
        <div className="course-item">
          <label htmlFor="totalStudents">Total no. of students:</label>
          <input type="number" id="totalStudents" value={totalStudents} onChange={(e) => setTotalStudents(e.target.value)} />
        </div>
        <div className="course-item">
          <label htmlFor="presentStudents">No. of students present:</label>
          <input type="number" id="presentStudents" value={presentStudents} onChange={(e) => setPresentStudents(e.target.value)} />
        </div>
      </div>

      <table className="endsemester-table">
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>Student Name</th>
            <th colSpan="5">Marks Obtained</th>
            <th>Total Marks</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>CO I</th>
            <th>CO II</th>
            <th>CO III</th>
            <th>CO IV</th>
            <th>CO V</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td><input type="text" placeholder="Enter Reg. No" value={student.regNo} onChange={(e) => handleStudentChange(index, 'regNo', e.target.value)} /></td>
              <td><input type="text" placeholder="Enter Student Name" value={student.name} onChange={(e) => handleStudentChange(index, 'name', e.target.value)} /></td>
              <td><input type="number" placeholder="Marks Obtained" value={student.co1} onChange={(e) => handleStudentChange(index, 'co1', e.target.value)} /></td>
              <td><input type="number" placeholder="Marks Obtained" value={student.co2} onChange={(e) => handleStudentChange(index, 'co2', e.target.value)} /></td>
              <td><input type="number" placeholder="Marks Obtained" value={student.co3} onChange={(e) => handleStudentChange(index, 'co3', e.target.value)} /></td>
              <td><input type="number" placeholder="Marks Obtained" value={student.co4} onChange={(e) => handleStudentChange(index, 'co4', e.target.value)} /></td>
              <td><input type="number" placeholder="Marks Obtained" value={student.co5} onChange={(e) => handleStudentChange(index, 'co5', e.target.value)} /></td>
              <td><input type="number" placeholder="Total Marks Obtained" value={student.total} readOnly /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-student-button" onClick={addStudentRow}>Add Student</button>
      <button className="submit-button" onClick={handleSubmit}>Submit and View Performance</button>
    </div>
  );
};

export default EndSemesterPage;
