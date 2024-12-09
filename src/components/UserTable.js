import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Cambia este valor para ajustar el número de filas por página

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20') // Obtenemos 20 usuarios
      .then(response => {
        const mappedUsers = response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          registered: new Date(user.registered.date).toLocaleDateString(),
        }));
        setUsers(mappedUsers);
      });
  }, []);

  // Calcular los usuarios para la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Fecha de Registro</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registered}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => paginate(index + 1)}
              style={{ cursor: 'pointer' }}
            >
              <a className="page-link">{index + 1}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UserTable;
