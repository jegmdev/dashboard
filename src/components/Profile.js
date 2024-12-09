import React from 'react';
import './Profile.css'; // Importar estilos

const Profile = () => {
  const user = {
    name: 'Juan Garcés',
    role: 'Administrador',
    profilePicture: 'https://i.ibb.co/PGQxtXn/CV-Profile.jpg',
    phone: '3017606255',
    portfolio: 'https://juangarces.info/',
    github: 'https://github.com/jegmdev',
  };

  return (
    <div className="profile-container">
      <img
        src={user.profilePicture}
        alt="Foto de Perfil"
        className="rounded-circle"
        style={{ width: '150px', height: '150px' }}
      />
      <h3>{user.name}</h3>
      <p>{user.role}</p>
      <div className="contact-info">
        <p><strong>Teléfono:</strong> {user.phone}</p>
        <p>
          <strong>Portafolio:</strong>{' '}
          <a href={user.portfolio} target="_blank" rel="noopener noreferrer">
            {user.portfolio}
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            {user.github}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
