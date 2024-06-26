import React, { useState } from 'react';
import './AnimalManagement.css';

const AddEditAnimal = () => {
  const [animal, setAnimal] = useState({ id: '', breed: '', age: '', weight: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic
  };

  return (
    <div className="add-edit-animal">
      <h2>Add/Edit Animal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={animal.id} onChange={handleChange} />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" value={animal.breed} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={animal.age} onChange={handleChange} />
        </label>
        <label>
          Weight:
          <input type="text" name="weight" value={animal.weight} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEditAnimal;
