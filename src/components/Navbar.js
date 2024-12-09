import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Dashboard</Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/reports">Reportes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
