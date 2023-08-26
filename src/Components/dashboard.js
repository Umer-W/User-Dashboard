// src/Dashboard.js
import React from 'react';
import UsersTab from './UserTab';

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 ">Dashboard</h1>
      <UsersTab />
    </div>
  );
}

export default Dashboard;
