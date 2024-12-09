import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import UserTable from './components/UserTable';
import Profile from './components/Profile';

const Dashboard = () => (
  <div>
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
);

const Reports = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <PieChart />
      </div>
    </div>
    <div className="mt-4">
      <UserTable />
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="main-content">
          <div className="container mt-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Dashboard />} /> {/* Redirigir a Dashboard */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
