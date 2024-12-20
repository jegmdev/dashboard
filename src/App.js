import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // Importa el Navbar
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import './App.css'; // Importar el archivo CSS global

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Agrega el Navbar aquí */}
        <div className="d-flex">
          <Sidebar />
          <div className="main-content">
            <div className="container mt-4">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
