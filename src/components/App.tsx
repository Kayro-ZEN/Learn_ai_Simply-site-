import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Hero from './Hero';
import NeuralNetwork from './NeuralNetwork';
import About from './About';
import Innovations from './Innovations';
import Forum from './Forum';
import Contact from './Contact';
import Footer from './Footer';
import AIChat from './AIChat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <NeuralNetwork />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
}

export default App;