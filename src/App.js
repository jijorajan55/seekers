import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Header component
import Home from './pages/Home'; // Home page
import Jobs from './pages/Jobs'; // Jobs page
import Footer from './components/Footer'; // Footer component

const App = () => {
  return (
    <Router basename="/seekers"> {/* Add basename */}
      <Header /> {/* Header component rendered at the top of the page */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* The Home page */}
        <Route path="/jobs" element={<Jobs />} /> {/* Jobs page */}
        <Route path="/about" element={<div>About Us</div>} /> {/* About Us page */}
      </Routes>
      
      <Footer /> {/* Footer component rendered at the bottom of the page */}
    </Router>
  );
};

export default App;
