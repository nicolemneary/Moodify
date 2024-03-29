import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SpotifyAuth from './components/spotifyAuth'; 
import Success from './components/Success'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotify-auth" element={<SpotifyAuth />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;