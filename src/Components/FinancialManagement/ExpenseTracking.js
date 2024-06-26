import React from 'react';
import './FinancialManagement.css';

const ExpenseTracking = () => {
  return (
    <div className="expense-tracking">
      <h2>Expense Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic data */}
          <tr>
            <td>2023-06-25</td>
            <td>Feed</td>
            <td>$200</td>
            <td>Purchased feed for the month</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTracking;
