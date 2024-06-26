// src/components/Auth/PasswordRecovery.js
import React, { useState } from 'react';
import './Auth.css'; // Import component-specific styles

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = async (e) => {
    e.preventDefault();
    // Implement password recovery logic here (e.g., send email)
    alert(`Password recovery link sent to ${email}`);
  };

  return (
    <div className="password-recovery-container">
      <h2>Password Recovery</h2>
      <form className="password-recovery-form" onSubmit={handlePasswordRecovery}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Recover Password</button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
