require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});