import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-metrics">
        <div className="metric">Number of Animals: 120</div>
        <div className="metric">Health Alerts: 5</div>
        <div className="metric">Inventory Levels: Adequate</div>
      </div>
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        {/* List of recent activities */}
      </div>
      <div className="upcoming-tasks">
        <h2>Upcoming Tasks</h2>
        {/* List of upcoming tasks */}
      </div>
    </div>
  );
};

export default Dashboard;
