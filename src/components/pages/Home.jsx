import React from 'react';
import '../../App.css';
import Slider from '../slider1';
import Footer from '../Footer';
import Session from '../session';
import Carousel from '../swiper';
import Cards from '../Cards';
import Serv from '../serv';
// import Count from '../count2';
import Testimonials from '../testimonials';
// import Tech from '../Tech';
// import Snap from '../snaps';
// import Carluosel from '../caruosel';
function Home() {
  return (
    <>
      <Slider />
      <Cards/>

      {/* <Count/> */}
      <Serv/>

      <Session/> 

      <Carousel/> 
      {/* <Snap/> */}


      <Testimonials/>
      {/* <Tech/> */}

      <Footer/>

    </>
  );
}

export default Home;