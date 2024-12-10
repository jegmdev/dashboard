import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import UserTable from './UserTable';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Overview</h1>
      </div>
      <div className="dashboard-content">
        <div className="card large">
          <div className="card-header">
            <h3>Profit</h3>
          </div>
          <div className="card-body">
            <h2>$12,895.5</h2>
            <BarChart />
          </div>
        </div>
        <div className="card medium">
          <div className="card-header">
            <h3>Sales Report</h3>
          </div>
          <div className="card-body">
            <PieChart />
          </div>
        </div>
        <div className="card full">
          <div className="card-header">
            <h3>Invoices</h3>
          </div>
          <div className="card-body">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
