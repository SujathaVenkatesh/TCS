import React from 'react';
import '../App.css';
import { Button } from './button';
import './Slider2.css';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div className='names'>
      <h1>WHO WE ARE</h1>
      <div className='hero-btns'>
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