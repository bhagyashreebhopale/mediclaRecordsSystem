import React from 'react';
import { useLocation } from 'react-router-dom'; 
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/login', '/register'];
  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <AppRoutes />
    </>
  );
}

export default App;
