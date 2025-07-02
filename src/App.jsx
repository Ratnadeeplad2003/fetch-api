import RegisterForm from './components/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css'; // for Ant Design v5+
import LoginForm from './components/LoginForm';
import Navbar from './components/NavBar';
import AdminDashboard from './components/AdminDashbord';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeleteUser from './components/DeletUser';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-5">Welcome to Home Page</h1>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
         <Route path="/deletuser" element={<DeleteUser />} />
      </Routes>
    </Router>
  );
};

export default App;



