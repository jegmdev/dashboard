import React from 'react';
import BarChart from './BarChart'; // Asegúrate de que las rutas sean correctas
import PieChart from './PieChart';
import UserTable from './UserTable';
import './Dashboard.css'; // Estilos específicos del Dashboard

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-item">
        <BarChart />
      </div>
      <div className="dashboard-item">
        <PieChart />
      </div>
      <div className="dashboard-item">
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
