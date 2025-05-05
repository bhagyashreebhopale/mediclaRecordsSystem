import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-semibold">Health Records</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white">
          <Button variant="link">Home</Button>
        </Link>
        <Link to="/dashboard" className="text-white">
          <Button variant="link">Dashboard</Button>
        </Link>
        <Link to="/view-patient" className="text-white">
          <Button variant="link">View Patients</Button>
        </Link>
        <Link to="/add-patient" className="text-white">
          <Button variant="link">Add Patient</Button>
        </Link>
        <Link to="/login" className="text-white">
          <Button variant="link">Login</Button>
        </Link>
        <Link to="/register" className="text-blue">
          <Button variant="link">Register</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;