// Home.jsx

import React, { useState, useEffect } from 'react';
import ZoomSessionForm from '../ZoomSessionForm';
import ZoomSessionList from '../ZoomSessionList';

const Home = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch sessions from backend
    fetch('http://localhost:5000/api/zoom/list')
      .then(res => res.json())
      .then(data => setSessions(data))
      .catch(error => console.error(error));
  }, []);

  const handleCreateSession = (sessionData) => {
    // Send sessionData to backend to create a new session
    fetch('http://localhost:5000/api/zoom/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionData)
    })
    .then(res => res.json())
    .then(data => setSessions([...sessions, data]))
    .catch(error => console.error(error));
  };

  const handleJoinSession = (sessionId) => {
    // Redirect user to join the Zoom session
    fetch(`http://localhost:5000/api/zoom/join/${sessionId}`)
      .then(res => res.json())
      .then(data => {
        window.location.href = data.zoomMeetingUrl; // Redirect user to Zoom meeting URL
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Zoom Session Integration</h1>
      <ZoomSessionForm onCreateSession={handleCreateSession} />
      <ZoomSessionList sessions={sessions} onJoinSession={handleJoinSession} />
    </div>
  );
};

export default Home;
