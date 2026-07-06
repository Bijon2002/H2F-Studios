import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Portfolio from './pages/Portfolio';
import Roots from './pages/Roots';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/roots" element={<Roots />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
