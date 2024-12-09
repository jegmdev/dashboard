import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import UserTable from './components/UserTable';
import './App.css';

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <BarChart />
            </div>
            <div className="col-md-6">
              <PieChart />
            </div>
          </div>
          <div className="mt-4">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
