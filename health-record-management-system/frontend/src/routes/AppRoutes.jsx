import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import ViewPatient from '../pages/ViewPatient';
import PatientForm from '../components/PatientForm';
import Navbar from '../components/Navbar';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-patient" element={<ViewPatient />} />
        <Route path="/add-patient" element={<PatientForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;