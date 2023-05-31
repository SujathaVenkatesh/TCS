import React, { useState } from 'react';
import tcs2 from './images/tcs2.jpg';
import './session.css';

function Session() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <div className="session-container">
      <h1 className="session-heading">Session Title</h1>
      <hr />

      <div className="columns-container">
        <div className="column">
          <div className='about-img'>
            <img src={tcs2} className="border-bottom animated-image" alt="" />
          </div>
        </div>

        <div className="column">
          <div className='about-content'>
            <h3 className='heading'>WHO WE ARE</h3><br />
            <h1 className="animated-title">We build greater futures<br />through innovation and<br />collective knowledge.</h1><br />
            {showParagraph && (
              <p>
                 We enable businesses to embrace technologies and empower them to achieve their 
                 business 
                 goals and objectives..
              </p>
            )}
            <button className="link-button animated-button" onClick={toggleParagraph}>
              {showParagraph ? 'Get to Know us' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session;
