// src/components/Settings/UserManagement.js
import React from 'react';
import './Settings.css';

const UserManagement = () => {
  // Example content
  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="user-list">
        <h3>User List</h3>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </div>
      <div className="add-user">
        <h3>Add User</h3>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserManagement;
