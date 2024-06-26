import React from 'react';
import './HealthManagement.css';

const HealthRecords = () => {
  return (
    <div className="health-records">
      <h2>Health Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Treatment</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic data */}
          <tr>
            <td>1</td>
            <td>2023-06-25</td>
            <td>Vaccination</td>
            <td>No issues</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HealthRecords;
