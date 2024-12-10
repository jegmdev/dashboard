import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Importar estilos

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón hamburguesa */}
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h3>Menú</h3>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/reports">Reportes</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
        </ul>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
