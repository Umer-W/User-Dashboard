// src/UsersTab.js
import React, { useState } from 'react';
import FileUpload from './FileUpload';

function UsersTab() {
  const [tableData, setTableData] = useState([]);

  const handleDataUpload = (data) => {
    setTableData(data);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Users</h2>
      <FileUpload onDataUpload={handleDataUpload} />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user, index) => (
            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-50' : ''}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTab;