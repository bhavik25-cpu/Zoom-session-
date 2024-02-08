// ZoomSessionList.jsx

import React from 'react';

const ZoomSessionList = ({ sessions, onJoinSession }) => {
  return (
    <div>
      <h2>Zoom Sessions</h2>
      <ul>
        {sessions.map(session => (
          <li key={session._id}>
            <span>{session.title}</span>
            <button onClick={() => onJoinSession(session._id)}>Join Session</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZoomSessionList;
