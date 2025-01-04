// LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // After Google Sign-In, navigate to the username/password page
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <img src="https://upload.wikimedia.org/wikipedia/en/7/77/Bannari_Amman_Institute_of_Technology_logo.png" alt="BIT Logo" />
        <p>BIT Performance tracker</p>
        <button onClick={handleGoogleSignIn} className="google-signin-btn">Google Sign In</button>
        <p>Sign in with your BIT Account</p>
      </div>
    </div>
  );
};

export default LoginPage;
