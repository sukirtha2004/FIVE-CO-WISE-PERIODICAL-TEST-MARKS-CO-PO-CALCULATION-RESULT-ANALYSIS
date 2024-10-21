import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li onClick={() => handleNavigation('/')}>HOME</li>
          <li onClick={() => handleNavigation('/dashboard')}>DASHBOARD</li>
          <li onClick={() => handleNavigation('/periodical-i')}>PERIODICAL I</li>
          <li onClick={() => handleNavigation('/periodical-ii')}>PERIODICAL II</li>
          <li onClick={() => handleNavigation('/innovative-practice')}>INNOVATIVE PRACTICE</li> {/* Correct navigation */}
          <li onClick={() => handleNavigation('/attendance')}>ATTENDANCE</li>
          <li onClick={() => handleNavigation('/end-semester')}>END SEMESTER</li>
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

        {/* Main Section */}
        <main className="content">
          <div className="input-container">
            {/* Course Code Input */}
            <div className="input-group">
              <label>COURSE CODE:</label>
              <input type="text" />
            </div>

            {/* Number of Students Input */}
            <div className="input-group">
              <label>No of student:</label>
              <input type="number" />
            </div>
          </div>

          {/* Chart Section */}
          <div className="chart-container">
            <div className="chart">
              {/* Chart Labels */}
              <div className="chart-label">NO of student at level I</div>
              <div className="chart-label">NO of student at level II</div>
              <div className="chart-label">NO of student at level III</div>
              <div className="chart-label">NO of student below level I</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
