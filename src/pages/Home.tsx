import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import Stats from '../components/Stats';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedProperties />
      <Services />
    </div>
  );
};

export default Home;