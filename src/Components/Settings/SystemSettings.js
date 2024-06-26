// src/components/Settings/SystemSettings.js
import React from 'react';
import './Settings.css'; // Corrected import statement

const SystemSettings = () => {
  // Example content
  return (
    <div className="system-settings">
      <h2>System Settings</h2>
      <div className="setting-item">
        <h3>General Settings</h3>
        <p>Configure general system settings here...</p>
      </div>
      <div className="setting-item">
        <h3>Security Settings</h3>
        <p>Configure security settings here...</p>
      </div>
      <div className="setting-item">
        <h3>Email Settings</h3>
        <p>Configure email settings here...</p>
      </div>
    </div>
  );
};

export default SystemSettings;
