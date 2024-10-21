import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleSignIn() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Simulate Google Sign-In logic, then navigate to Login page
    navigate('/login');
  };

  return (
    <div className="login-container">
      <header>
        <img className="logo-header" src="logo.png" alt="Logo" />
        <h1>Academic Performance Tracker</h1>
      </header>
      <div className="login-box">
        <img className="login-logo" src="google-logo.png" alt="Google Logo" />
        <h2>Sign in with Google</h2>
        <button className="google-signin-btn" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
        <p className="signin-text">Sign in with your BIT account</p>
      </div>
    </div>
  );
}

export default GoogleSignIn;
