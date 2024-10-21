import React, { useState } from 'react';
import './Attendance.css';

function Attendance() {
  const [courseCode, setCourseCode] = useState('');
  const [totalStudents, setTotalStudents] = useState('');
  const [students, setStudents] = useState([
    { regNo: '', name: '', pt1: 'Present', pt2: 'Present', endSem: 'Present' },
  ]);

  const handleCourseCodeChange = (e) => setCourseCode(e.target.value);
  const handleTotalStudentsChange = (e) => setTotalStudents(e.target.value);

  const handleStudentChange = (index, field, value) => {
    const newStudents = [...students];
    newStudents[index][field] = value;
    setStudents(newStudents);
  };

  const addStudentRow = () => {
    setStudents([
      ...students,
      { regNo: '', name: '', pt1: 'Present', pt2: 'Present', endSem: 'Present' },
    ]);
  };

  const calculateAttendance = () => {
    let presentCount = 0;
    students.forEach((student) => {
      if (student.pt1 === 'Present' && student.pt2 === 'Present' && student.endSem === 'Present') {
        presentCount++;
      }
    });
    return presentCount;
  };

  const getAttendanceClass = (status) => {
    if (status === 'Present') return 'present';
    if (status === 'Absent') return 'absent';
    return 'default';
  };

  return (
    <div className="tracker-container">
      <header className="tracker-header">
        <h1>Academic Performance Tracker</h1>
      </header>
      <div className="faculty-course">
        <div className="input-group">
          <label>Course Code-Name:</label>
          <input type="text" value={courseCode} onChange={handleCourseCodeChange} />
        </div>
        <div className="input-group">
          <label>Total no.of students:</label>
          <input type="number" value={totalStudents} onChange={handleTotalStudentsChange} />
        </div>
        <div className="input-group">
          <label>Total present:</label>
          <input type="text" value={calculateAttendance()} readOnly />
        </div>
        <div className="input-group">
          <label>No. of absentees:</label>
          <input type="text" value={totalStudents - calculateAttendance()} readOnly />
        </div>
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Reg.No</th>
            <th>Student Name</th>
            <th>PT I</th>
            <th>PT II</th>
            <th>END SEMESTER</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={student.regNo}
                  onChange={(e) => handleStudentChange(index, 'regNo', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) => handleStudentChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={student.pt1}
                  onChange={(e) => handleStudentChange(index, 'pt1', e.target.value)}
                  className={getAttendanceClass(student.pt1)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
              <td>
                <select
                  value={student.pt2}
                  onChange={(e) => handleStudentChange(index, 'pt2', e.target.value)}
                  className={getAttendanceClass(student.pt2)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
              <td>
                <select
                  value={student.endSem}
                  onChange={(e) => handleStudentChange(index, 'endSem', e.target.value)}
                  className={getAttendanceClass(student.endSem)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
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

export default Attendance;