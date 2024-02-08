// server.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const zoomRoutes = require('./routes/zoomRoutes');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Get the port number from the environment variable or use 5000 as default
const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/zoom', zoomRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
