const ZoomSession = require('../models/ZoomSession');
const mongoose = require('mongoose');

const zoomController = {
  createSession: async (req, res) => {
    try {
      const { title, date, time } = req.body;
      const newSession = new ZoomSession({ title, date, time });
      await newSession.save();
      res.status(201).json(newSession);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  listSessions: async (req, res) => {
    try {
      const sessions = await ZoomSession.find();
      res.status(200).json(sessions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  joinSession: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: 'Session ID is required' });
      }
  
      const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
      if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid session ID' });
      }
  
      const session = await ZoomSession.findById(id);
      if (!session) {
        return res.status(404).json({ message: 'Session not found' });
      }
  
      // Assuming session.url contains the Zoom meeting URL
      const zoomMeetingUrl = session.url;
      
      // Redirect the user to the Zoom meeting URL
      res.redirect(zoomMeetingUrl);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
};

module.exports = zoomController;
