import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NeuralNetwork from './components/NeuralNetwork';
import About from './components/About';
import Innovations from './components/Innovations';
import Forum from './components/Forum';
import Contact from './components/Contact';
import Resources from './components/Resources/Resources';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
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
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

export default App;