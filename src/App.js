import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext'; // Import AppProvider
import LoginPage from './LoginPage';
import UsernamePasswordPage from './UsernamePasswordPage';
import Dashboard from './Dashboard';
import PeriodicalIPage from './PeriodicalIpage'; // Updated component name
import PeriodicalIIPage from './PeriodicalIIPage';
import TrackerPage from './TrackerPage';
import TrackerIIPage from './TrackerIIpage';
import Attendance from './Attendance';
import EndSemester from './EndSemester';
import InnovativePracticePage from './InnovativePracticePage';
import EndsemTracker from './EndsemTracker';

const App = () => {
  return (
    <AppProvider> {/* Wrap the app with AppProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<UsernamePasswordPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/periodical-i" element={<PeriodicalIPage />} />
          <Route path="/periodical-ii" element={<PeriodicalIIPage />} />
          <Route path="/trackerI" element={<TrackerPage />} />
          <Route path="/trackerII" element={<TrackerIIPage />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/end-semester" element={<EndSemester />} />
          <Route path="/innovative-practice" element={<InnovativePracticePage />} />
          <Route path="/endsemtracker" element={<EndsemTracker />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
