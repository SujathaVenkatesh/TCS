import React from 'react';
import '../../App.css';
import Slider from '../slider1';
import Footer from '../Footer';
import Session from '../session';
import Carousel from '../swiper';
import Cards from '../Cards';
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