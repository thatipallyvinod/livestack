import React from 'react';
import './Welcome.css'; // Import component-specific styles

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        <h1>Welcome to Livestock Management System</h1>
        <p>Manage your livestock efficiently and effectively.</p>
        <div className="welcome-buttons">
          <a href="/dashboard" className="welcome-button">Go to Dashboard</a>
          <a href="/login" className="welcome-button">Login</a>
        </div>
      </div>
      <div className="sections-container">
        <div className="section livestock-management">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-painting-of-a-cow-on-a-white-background-image_2932327.jpg" className="section-image" alt="Livestock Management"/>
          <h2>Livestock Management</h2>
          <p>
            Integrated livestock management, livestock record keeping, farm mapping, tracking, grazing, breeding, health management, sales and reporting software to run a thriving cattle, sheep, pig, poultry, goat, or any multi-species livestock business.
          </p>
          <a href="/livestock" className="welcome-button">Learn More</a>
        </div>
        <div className="section farm-management">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-painting-of-a-cow-on-a-white-background-image_2932327.jpg" className="section-image" alt="Farm Management"/>
          <h2>Farm Management</h2>
          <p>
            Our farm management software helps simplify your crop planning, yield & income projections and easily visualize your season. Collaborate with your team to track and report on farm work, inputs, activities and harvests and simplify ROI and compliance reporting.
          </p>
          <a href="/farm" className="welcome-button">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
