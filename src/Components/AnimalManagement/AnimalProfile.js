import React from 'react';
import './AnimalManagement.css';

const AnimalProfile = () => {
  return (
    <div className="animal-profile">
      <h2>Animal Profile</h2>
      <div className="animal-details">
        <p><strong>ID:</strong> 1</p>
        <p><strong>Breed:</strong> Breed A</p>
        <p><strong>Age:</strong> 2 years</p>
        <p><strong>Weight:</strong> 500 kg</p>
        <p><strong>Location:</strong> Barn 1</p>
      </div>
    </div>
  );
};

export default AnimalProfile;
