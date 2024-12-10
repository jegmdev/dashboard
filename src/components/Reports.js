import React from 'react';
import PieChart from './PieChart'; // Asegúrate de que la ruta sea correcta
import UserTable from './UserTable';
import './Reports.css';

const Reports = () => {
  return (
    <div className="reports-container">
      <h3 className="reports-title">Reports</h3>
      <div className="reports-grid">
        <div className="report-card">
          <h5 className="card-title">Sales Distribution</h5>
          <PieChart />
        </div>
        <div className="report-card">
          <h5 className="card-title">User Table</h5>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Reports;
