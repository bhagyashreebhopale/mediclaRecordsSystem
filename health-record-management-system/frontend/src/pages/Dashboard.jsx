// pages/Dashboard.jsx
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card';
import RecordCard from '../components/RecordCard';
import { Button } from '../components/ui/button'; 

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      <Card className="w-full sm:w-60">
        <CardHeader className="bg-blue-600 text-white">
          <h3>Patients</h3>
        </CardHeader>
        <CardContent>
          <p>150</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="text-blue-600">View More</Button>
        </CardFooter>
      </Card>

      <Card className="w-full sm:w-60">
        <CardHeader className="bg-yellow-500 text-white">
          <h3>Pending Records</h3>
        </CardHeader>
        <CardContent>
          <p>20</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="text-yellow-600">View More</Button>
        </CardFooter>
      </Card>

      <Card className="w-full sm:w-60">
        <CardHeader className="bg-red-600 text-white">
          <h3>Alerts</h3>
        </CardHeader>
        <CardContent>
          <p>5</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="text-red-600">View Alerts</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
