import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10')
      .then(response => {
        setUsers(response.data.results);
      });
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Fecha de Registro</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{`${user.name.first} ${user.name.last}`}</td>
            <td>{user.email}</td>
            <td>{new Date(user.registered.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
