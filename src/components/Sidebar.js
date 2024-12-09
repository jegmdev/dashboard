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
      {/* Botón hamburguesa / cierre */}
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '15px',
          left: isOpen ? 'calc(250px - 45px)' : '15px', // Dinámico según el estado
          transition: 'left 0.3s ease',
          zIndex: 1050,
        }}
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
    </div>
  );
};

export default Sidebar;
