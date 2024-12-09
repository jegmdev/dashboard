import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white">
      <h3 className="p-3">Menú</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Reportes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Perfil</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
