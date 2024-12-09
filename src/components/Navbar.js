import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Dashboard</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Reportes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Perfil</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
