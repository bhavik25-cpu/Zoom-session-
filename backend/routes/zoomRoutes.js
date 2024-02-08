const express = require('express');
const router = express.Router();
const zoomController = require('../controllers/zoomController');

// Routes for Zoom session integration
router.post('/create', zoomController.createSession);
router.get('/list', zoomController.listSessions);
router.get('/join/:id', zoomController.joinSession);

module.exports = router;
