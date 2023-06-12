import React from 'react';
import '../../App.css';
import Slider from '../slider1';
import Footer from '../Footer';
import Session from '../session';
import Carousel from '../swiper';
import Cards from '../Cards';
import Serv from '../serv';
import Sercon from '../sercon';
// import Carluosel from '../caruosel';
function Home() {
  return (
    <>
      <Slider />
      <Cards/>
      <Serv/>
      <Session/> 
      <Sercon/>
      <Carousel/> 

      <Footer/>

    </>
  );
}

export default Home;