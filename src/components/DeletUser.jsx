import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [email, setEmail] = useState('');

  const handleDelete = async () => {
    if (!email) {
      alert('Please enter an email to delete.');
      return;
    }

    try {
      const res = await axios.delete(`http://localhost:5000/api/users/${email}`);
      alert(res.data.message);
      setEmail('');
    } catch (err) {
      const msg = err.response?.data?.message || 'Error deleting user';
      alert(msg);
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-3">Delete User by Email</h3>
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter user email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete User
      </button>
    </div>
  );
};

export default DeleteUser;
