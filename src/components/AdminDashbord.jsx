import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Admin Dashboard</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr><th>#</th><th>Name</th><th>Email</th><th>Mobile</th><th>Gender</th></tr>
        </thead>
        <tbody>
          {users.length > 0 ? users.map((user, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.gender}</td>
            </tr>
          )) : <tr><td colSpan="5" className="text-center">No users</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
