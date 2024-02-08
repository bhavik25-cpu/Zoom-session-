// ZoomSessionForm.jsx

import { useState } from 'react';
import './ZoomSessionForm.css'; // Import the CSS file

const ZoomSessionForm = ({ onCreateSession }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateSession({ title, date, time });
    setTitle('');
    setDate('');
    setTime('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="input-container">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="input-container">
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <div className="button-container">
        <button type="submit">Create Session</button>
      </div>
    </form>
  );
};

export default ZoomSessionForm;
