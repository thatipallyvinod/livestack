import React from 'react';
import { Link } from 'react-router-dom';
import './AnimalManagement.css';

const AnimalList = () => {
  return (
    <div className="animal-list">
      <h2>Animal List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Breed</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic data */}
          <tr>
            <td>1</td>
            <td>Breed A</td>
            <td>2 years</td>
            <td>500 kg</td>
            <td>
              <Link to="/animals/1">View</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AnimalList;

