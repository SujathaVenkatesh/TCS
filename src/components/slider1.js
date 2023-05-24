import React from 'react';
import '../App.css';
import { Button } from './button';
import './slider1.css';

function Slider() {
  return (
    <div className='name'>
      <h1>TCS named to World's Most Admired Companies List</h1>
      <p>What are you waiting for?</p>
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