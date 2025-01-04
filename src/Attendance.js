import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import './Attendance.css';

function Attendance() {
  const { students, setStudents, courseCode, setCourseCode, totalStudents, setTotalStudents } = useContext(AppContext);

  // Handle attendance status change for a specific evaluation
  const handleAttendanceChange = (index, evaluation, status) => {
    const updatedStudents = [...students];
    updatedStudents[index][evaluation] = status; // Add or update the attendance for the specific evaluation
    setStudents(updatedStudents);
  };

  // Add a new student row
  const addStudentRow = () => {
    setStudents([
      ...students,
      {
        regNo: '',
        name: '',
        periodical1: 'Absent',
        periodical2: 'Absent',
        endSemester: 'Absent',
      },
    ]);
  };

  // Delete a student row
  const deleteStudentRow = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="attendance-container">
      <header className="attendance-header">
        <h1>Attendance Tracker</h1>
      </header>

      <div className="input-section">
        <label>
          Course Code:
          <input
            type="text"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            placeholder="Enter Course Code"
          />
        </label>
        <label>
          Total Students:
          <input
            type="number"
            value={totalStudents}
            onChange={(e) => setTotalStudents(e.target.value)}
            placeholder="Enter Total Students"
          />
        </label>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>Student Name</th>
            <th>Periodical I</th>
            <th>Periodical II</th>
            <th>End Semester</th>
            <th>Actions</th>
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
                  onChange={(e) => {
                    const updatedStudents = [...students];
                    updatedStudents[index].regNo = e.target.value;
                    setStudents(updatedStudents);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Student Name"
                  value={student.name}
                  onChange={(e) => {
                    const updatedStudents = [...students];
                    updatedStudents[index].name = e.target.value;
                    setStudents(updatedStudents);
                  }}
                />
              </td>
              <td>
                <select
                  value={student.periodical1 || 'Absent'}
                  onChange={(e) =>
                    handleAttendanceChange(index, 'periodical1', e.target.value)
                  }
                  className={student.periodical1 === 'Present' ? 'present' : 'absent'}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
              <td>
                <select
                  value={student.periodical2 || 'Absent'}
                  onChange={(e) =>
                    handleAttendanceChange(index, 'periodical2', e.target.value)
                  }
                  className={student.periodical2 === 'Present' ? 'present' : 'absent'}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
              <td>
                <select
                  value={student.endSemester || 'Absent'}
                  onChange={(e) =>
                    handleAttendanceChange(index, 'endSemester', e.target.value)
                  }
                  className={student.endSemester === 'Present' ? 'present' : 'absent'}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteStudentRow(index)}
                >
                  Delete
                </button>
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
