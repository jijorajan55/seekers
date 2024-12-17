import React from 'react';
import HeroSection from '../components/HeroSection';
import JobCategories from '../components/JobCategories';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <JobCategories />
      <Footer />
    </div>
  );
};

export default Home;