
import React, { useState } from 'react';
import { Button } from './ui/button';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [disease, setDisease] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, age, disease });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm">Disease</label>
        <input
          type="text"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 text-white rounded-md">
        Submit
      </Button>
    </form>
  );
};

export default PatientForm;
