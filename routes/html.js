const { startSession } = require("mongoose")

const express = require("express")
const router = express.Router()

// DEPENDENCIES
const path = require('path');

// ROUTING
module.exports = (app) => {
  // => HTML GET Requests
 
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  // If no matching route is found default to home
  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/ stats.html'));
  });
};

module.exports = router;