/** @format */

import React from 'react';
import Navigation from '../components/navbar/Navigation';
import Jumbo from '../components/jumbotron/Jumbo';
import Footer from '../components/footer/Footer';
import '../index.css';

const Home = () => {
  return (
    <>
      <Navigation />
      <Jumbo />
      <Footer />
    </>
  );
};

export default Home;
