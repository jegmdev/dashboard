import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    role: 'Administrador',
    profilePicture: 'https://via.placeholder.com/150', // URL de imagen de perfil
  };

  return (
    <div className="profile-container text-center mt-4">
      <img
        src={user.profilePicture}
        alt="Foto de Perfil"
        className="rounded-circle mb-3"
        style={{ width: '150px', height: '150px' }}
      />
      <h3>{user.name}</h3>
      <p className="text-muted">{user.role}</p>
    </div>
  );
};

export default Profile;
