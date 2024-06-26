import React from 'react';
import './FinancialManagement.css';

const SalesRecords = () => {
  return (
    <div className="sales-records">
      <h2>Sales Records</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic data */}
          <tr>
            <td>2024-06-01</td>
            <td>Milk</td>
            <td>20</td>
            <td>$2</td>
            <td>$40</td>
          </tr>
          <tr>
            <td>2024-06-02</td>
            <td>Eggs</td>
            <td>50</td>
            <td>$0.5</td>
            <td>$25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesRecords;
