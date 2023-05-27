import React from 'react';
import './Cards.css';
import tcsimg4 from './images/tcsimg4.jpg';
import img2 from './images/img2.jpg';
import tcss2 from './images/tcss2.jpg';
import { FaBook } from 'react-icons/fa';

function Cards() {
  return (
    <div>
      <h1 className="cards-heading">Insights of interest</h1>
      {/* <a href="#" className="vertical-line">View All</a> */}

<hr></hr>

      <div className="cards-container">
        <div className="card">
          <img src={tcsimg4} className="w-100 border-bottom" alt="Services" />
          <div className="card-content">
            <p className="card-description">The battle of big vs small data</p>
          </div>
          <a href="#" className="vertical-line" alt="name"><FaBook className="read-more-icon" />
            READ MORE
          </a>
        </div>
        <div className="card">
          <img src={img2} className="w-100 border-bottom" alt="Services" />
          <div className="card-content">
            <p className="card-description">AI joins hands with health</p>
            <a href="#" className="vertical-line" alt="name">
            <FaBook className="read-more-icon" />
            READ MORE
          </a>
          </div>

        </div>
        <div className="card">
          <img src={tcss2} className="w-100 border-bottom" alt="Services" />
          <div className="card-content">
            <p className="card-description">Linking all the moving parts</p>
            <a href="#" className="vertical-line" alt="name">
            <FaBook className="read-more-icon" />
            READ MORE
          </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cards;
