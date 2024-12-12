import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update imports
import Header from './components/Header'; // Assuming Header is in the components folder
import Home from './pages/Home'; // Assuming Home component exists in pages folder
import Jobs from './pages/Jobs'; // Assuming Jobs component exists in pages folder
import Footer from './components/Footer'; // Assuming Footer component exists in components folder

const App = () => {
  return (
    <Router>
      <Header /> {/* Header component rendered at the top of the page */}
      
      <Routes> {/* Updated to use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* The Home page */}
        <Route path="/jobs" element={<Jobs />} /> {/* Jobs page */}
        <Route path="/about" element={<div>About Us</div>} /> {/* About Us page */}
      </Routes>

    </Router>
  );
};

export default App;
