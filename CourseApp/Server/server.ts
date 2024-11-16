import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

// Load courses data
const courses = require(path.join(__dirname, 'data', 'courses.json'));

// Endpoint to get courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
