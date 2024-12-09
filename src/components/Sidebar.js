import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white">
      <h3 className="p-3">Menú</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/reports" className="nav-link text-white">Reportes</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link text-white">Perfil</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
