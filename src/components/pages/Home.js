import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Slider from '../slider1';
import Footer from '../Footer';
import Session from '../session';
import Carousel from '../swiper';
// import Carluosel from '../caruosel';
function Home() {
  return (
    <>
      <Slider />
      <Cards/>
      <Session/> 
      <Carousel/> 
      <Footer/>
    </>
  );
}

export default Home;