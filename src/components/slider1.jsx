import React from 'react';
import '../App.css';
import { Button } from './button';
import './slider1.css';

function Slider() {
  return (
    <div className='name'>
      <h1>WHY Global Services</h1>
      <p>Digital Marketing|Web development|Product development<br></br>
        <center> E- Commerce|Content development </center>
      </p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default Slider;