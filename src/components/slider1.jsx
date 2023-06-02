import React from 'react';
import '../App.css';
import { Button } from './button';
import './slider1.css';

function Slider() {
  return (
    <section id='slider'>
    <div className='name'>
      <h1>WHY Global Services</h1>
      <p>Digital Marketing|Web development|Product development<br></br>
        <center> E- Commerce|Content development </center>
      </p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        
      </div>
    </div>
    </section>
  );
}

export default Slider;