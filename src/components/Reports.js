import React from 'react';
import PieChart from './PieChart'; // Asegúrate de que la ruta sea correcta
import UserTable from './UserTable';
import './Reports.css';

const Reports = () => {
  return (
    <div className="container-fluid">
      <h3 className="mb-4 text-center">Reports</h3>
      <div className="row">
        <div className="col-12 mb-4">
          <PieChart />
        </div>
        <div className="col-12 mb-4">
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Reports;
