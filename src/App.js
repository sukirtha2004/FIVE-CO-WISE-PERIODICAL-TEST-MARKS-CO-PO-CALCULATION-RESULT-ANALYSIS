import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import UsernamePasswordPage from './UsernamePasswordPage';
import Dashboard from './Dashboard';
import PeriodicalIpage from './PeriodicalIpage';
import PeriodicalIIPage from './PeriodicalIIPage';
import TrackerPage from './TrackerPage';  // Import TrackerPage or PerformanceTracker
import TrackerIIpage from './TrackerIIpage';
import Attendance from './Attendance';
import EndSemester from './EndSemester';
import InnovativePracticePage from './InnovativePracticePage';
import EndsemTracker from './EndsemTracker';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<UsernamePasswordPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/periodical-i" element={<PeriodicalIpage />} />
        <Route path="/periodical-ii" element={<PeriodicalIIPage />} />
        <Route path="/trackerI" element={<TrackerPage />} /> {/* Route for Performance Tracker */}
        <Route path="/trackerII" element={<TrackerIIpage />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/end-semester" element={<EndSemester />} />
        <Route path="/innovative-practice" element={<InnovativePracticePage />} />
        <Route path="/endsemtracker" element={<EndsemTracker />} />
      </Routes>
    </Router>
  );
};

export default App;
