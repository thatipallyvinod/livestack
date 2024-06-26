import React from 'react';
import './FinancialManagement.css';

const FinancialReports = () => {
  return (
    <div className="financial-reports">
      <h1>Financial Reports</h1>
      <div className="report">
        <h2>Income Report</h2>
        <p>Here you can view the income reports for the selected period.</p>
      </div>
      <div className="report">
        <h2>Expense Report</h2>
        <p>Here you can view the expense reports for the selected period.</p>
      </div>
      <div className="report">
        <h2>Profit & Loss Report</h2>
        <p>Here you can view the profit and loss reports for the selected period.</p>
      </div>
    </div>
  );
};

export default FinancialReports;
