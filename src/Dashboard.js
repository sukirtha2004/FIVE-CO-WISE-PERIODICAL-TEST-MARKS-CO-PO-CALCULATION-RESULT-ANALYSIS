import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // State to store course code and total students
  const [courseCode, setCourseCode] = useState("");
  const [totalStudents, setTotalStudents] = useState(0);

  const handleTotalStudentsChange = (e) => {
    const input = parseInt(e.target.value.trim(), 10);
    if (!isNaN(input)) {
      setTotalStudents(input);
    } else {
      setTotalStudents(0);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li onClick={() => handleNavigation("/")}>HOME</li>
          <li onClick={() => handleNavigation("/dashboard")}>DASHBOARD</li>
          <li onClick={() => handleNavigation("/periodical-i")}>PERIODICAL I</li>
          <li onClick={() => handleNavigation("/periodical-ii")}>PERIODICAL II</li>
          <li onClick={() => handleNavigation("/innovative-practice")}>
            INNOVATIVE PRACTICE
          </li>
          <li onClick={() => handleNavigation("/attendance")}>ATTENDANCE</li>
          <li onClick={() => handleNavigation("/end-semester")}>
            END SEMESTER
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/7/77/Bannari_Amman_Institute_of_Technology_logo.png"
            alt="BIT Logo"
            className="bit-logo"
          />
          <h1>ACADEMIC PERFORMANCE TRACKER</h1>
        </header>

        {/* Input Section */}
        <main className="content">
          <div className="input-container">
            {/* Course Code Input */}
            <div className="input-group">
              <label>Course Code:</label>
              <input
                type="text"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                placeholder="Enter course code"
              />
            </div>

            {/* Total Students Input */}
            <div className="input-group">
              <label>Total Number of Students:</label>
              <input
                type="number"
                value={totalStudents}
                onChange={handleTotalStudentsChange}
                placeholder="Enter total number of students"
              />
            </div>
          </div>

          {/* Square Boxes Section */}
          <div className="box-container">
            <div className="box level1">
              <span className="box-label">Level I</span>
              <span className="box-value">0</span>
            </div>
            <div className="box level2">
              <span className="box-label">Level II</span>
              <span className="box-value">0</span>
            </div>
            <div className="box level3">
              <span className="box-label">Level III</span>
              <span className="box-value">0</span>
            </div>
            <div className="box below-level1">
              <span className="box-label">Below Level I</span>
              <span className="box-value">0</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
