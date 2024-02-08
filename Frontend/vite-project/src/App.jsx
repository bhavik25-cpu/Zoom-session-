import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<Home />} /> {/* Use element prop instead of component */}
      </Routes> {/* Use Routes instead of Switch */}
    </Router>
  );
};

export default App;
