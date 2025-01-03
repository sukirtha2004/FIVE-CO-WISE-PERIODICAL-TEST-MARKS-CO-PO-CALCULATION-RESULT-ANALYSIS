import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernamePasswordPage.css'; // Add CSS styling as needed

const UsernamePasswordPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add validation logic here if needed
    if (username && password) {
      navigate('/dashboard'); // Navigate to the dashboard after successful login
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login with Username and Password</h2>
        <div className="login-inputs">
          <input
            type="text"
            placeholder="Enter e-mail or Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button onClick={handleLogin} className="login-btn"> Login </button>
        </div>
      </div>
    </div>
  );
};

export default UsernamePasswordPage;
