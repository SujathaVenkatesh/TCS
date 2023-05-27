import React from 'react';
import tcs2 from './images/tcs2.jpg';
import './session.css'; 

function Session() {
  return (
    <div className="session-container">
      <h1 className="session-heading">Session Title</h1>
      <hr />

      <div className="columns-container">
        <div className="column">
          <div className='about-img'>
            <img src={tcs2} className="border-bottom animated-image" alt=" " />
          </div>
        </div>

        <div className="column">
          <div className='about-content'>
            <h3 className='heading'>WHO WE ARE</h3><br />
            <h1 className="animated-title">We build greater futures<br />through innovation and<br />collective knowledge.</h1><br />
            <p>
              TCS is an IT services, consulting, and business solutions
              organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 50 years.
            </p>
            <button className="link-button animated-button">
              Get to know us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session;
