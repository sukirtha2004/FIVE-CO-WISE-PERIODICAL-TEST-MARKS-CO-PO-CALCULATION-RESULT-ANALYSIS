import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import './PeriodicalIPage.css';

function PeriodicalIIPage() {
  const { students, setStudents, periodical2PresentCount, courseCode } = useContext(AppContext);

  // Filter students marked as "Present" for Periodical II
  const presentStudents = students.filter(
    (student) => student.periodical2 === 'Present'
  );

  // Handle input change for student data
  const handleStudentChange = (index, field, value) => {
    const updatedStudents = students.map((student, i) => {
      if (i === index) {
        const updatedStudent = { ...student, [field]: value };

        // Recalculate total marks if any CO marks are changed
        const co3 = parseInt(updatedStudent.co3Obtained) || 0;
        const co4 = parseInt(updatedStudent.co4Obtained) || 0;
        const co5 = parseInt(updatedStudent.co5Obtained) || 0;
        updatedStudent.total = co3 + co4 + co5;

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
      {
        regNo: '',
        name: '',
        periodical2: 'Present',
        co3Obtained: '',
        co4Obtained: '',
        co5Obtained: '',
        total: 0,
      },
    ]);
  };

  // Delete student row
  const deleteStudentRow = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="periodical-page-container">
      <header className="periodical-header">
        <h1>
          {courseCode
            ? `Periodical II - ${courseCode} - Academic Performance`
            : 'Periodical II - Academic Performance'}
        </h1>
      </header>

      {/* Attendance Summary Box */}
      <div className="attendance-summary-box">
        <div className="summary-item">
          <p>Total Students</p>
          <h2>{students.length}</h2>
        </div>
        <div className="summary-item">
          <p>Present Students</p>
          <h2>{periodical2PresentCount}</h2>
        </div>
      </div>

      <table className="periodical-table">
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>Student Name</th>
            <th colSpan="3">Marks Obtained</th>
            <th>Total Marks</th>
            <th>Actions</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>CO 3</th>
            <th>CO 4</th>
            <th>CO 5</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {presentStudents.map((student, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  placeholder="Enter Reg. No"
                  value={student.regNo}
                  onChange={(e) =>
                    handleStudentChange(index, 'regNo', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Student Name"
                  value={student.name}
                  onChange={(e) =>
                    handleStudentChange(index, 'name', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Marks Obtained"
                  value={student.co3Obtained || ''}
                  onChange={(e) =>
                    handleStudentChange(index, 'co3Obtained', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Marks Obtained"
                  value={student.co4Obtained || ''}
                  onChange={(e) =>
                    handleStudentChange(index, 'co4Obtained', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Marks Obtained"
                  value={student.co5Obtained || ''}
                  onChange={(e) =>
                    handleStudentChange(index, 'co5Obtained', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.total || 0}
                  readOnly
                  className="total-marks"
                />
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

      {presentStudents.length === 0 && (
        <div className="no-students-message">
          <p>No students marked as "Present" for Periodical II.</p>
        </div>
      )}

      <button className="add-student-button" onClick={addStudentRow}>
        Add Student
      </button>
    </div>
  );
}

export default PeriodicalIIPage;
