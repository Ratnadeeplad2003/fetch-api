const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory users array
let users = [];

// POST - Register user
app.post('/api/register', (req, res) => {
  const user = req.body;

  // Prevent duplicate email
  const existingUser = users.find(u => u.email === user.email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  users.push(user);
  res.status(201).json({ message: 'User registered successfully', user });
});

// GET - All registered users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST - Login user
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid email or password' });
  }
});

// DELETE - Remove user by email
app.delete('/api/users/:email', (req, res) => {
  const { email } = req.params;

  const index = users.findIndex(u => u.email === email);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(index, 1); // Remove the user
  res.json({ message: 'User deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
