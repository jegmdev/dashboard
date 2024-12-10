import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserTable.css'; // Importar estilos

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://randomuser.me/api/?results=20')
      .then(response => {
        const mappedUsers = response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          registered: new Date(user.registered.date).toLocaleDateString(),
        }));
        setUsers(mappedUsers);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        setError('Error al cargar los datos.');
        setLoading(false);
      });
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
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

      <nav>
        <ul className="pagination justify-content-center">
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
