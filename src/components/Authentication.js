// src/components/Authentication.js

import React, { useState } from 'react';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    // Add logic for handling user login here
    console.log('User logged in:', username);
  };

  const handleRegister = () => {
    // Add logic for handling user registration here
    console.log('User registered:', username);
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          {isRegistering ? (
            <button onClick={handleRegister}>Register</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </form>
      <div>
        {isRegistering ? (
          <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
        ) : (
          <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Register</span></p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
