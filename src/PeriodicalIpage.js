import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import './PeriodicalIPage.css';

function PeriodicalIPage() {
  const { students, setStudents, courseCode, periodical1PresentCount } =
    useContext(AppContext);

  // Filter students marked as "Present" for Periodical I
  const presentStudents = students.filter(
    (student) => student.periodical1 === 'Present'
  );

  // Handle input change for student data
  const handleStudentChange = (index, field, value) => {
    const updatedStudents = students.map((student, i) => {
      if (i === index) {
        const updatedStudent = { ...student, [field]: value };

        // Recalculate total marks if any CO marks are changed
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
      {
        regNo: '',
        name: '',
        periodical1: 'Present',
        co1Obtained: '',
        co2Obtained: '',
        co3Obtained: '',
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
            ? `Periodical I - ${courseCode} - Academic Performance`
            : 'Periodical I - Academic Performance'}
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
          <h2>{periodical1PresentCount}</h2>
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
            <th>CO 1</th>
            <th>CO 2</th>
            <th>CO 3</th>
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
                  value={student.co1Obtained || ''}
                  onChange={(e) =>
                    handleStudentChange(index, 'co1Obtained', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Marks Obtained"
                  value={student.co2Obtained || ''}
                  onChange={(e) =>
                    handleStudentChange(index, 'co2Obtained', e.target.value)
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
          <p>No students marked as "Present" for Periodical I.</p>
        </div>
      )}

      <button className="add-student-button" onClick={addStudentRow}>
        Add Student
      </button>
    </div>
  );
}

export default PeriodicalIPage;
