import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Slider from '../slider1';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Slider />
      <Cards/>
      <Footer/>
    </>
  );
}

export default Home;