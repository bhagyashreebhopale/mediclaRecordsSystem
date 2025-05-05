
import React from 'react';
import { Button } from ./ui/button;
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-blue-400">
            <Button variant="link" className="text-white">
              Dashboard
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/view-patient" className="hover:text-blue-400">
            <Button variant="link" className="text-white">
              Patient Records
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/add-patient" className="hover:text-blue-400">
            <Button variant="link" className="text-white">
              Add Patient
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
