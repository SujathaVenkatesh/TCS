import React from 'react';
import Slider2 from '../Slider2';
import './About.css';

import Footer from '../Footer';
import History from '../History';
const AboutUs = () => {
  return (
    <>
      <Slider2 />
      <div className="about-us-container">
        <h1 className="head">About Us</h1>
        <hr className="horizontal-line" />

        <div className="about-us-content">
          <p>
            WHY Global Services is an innovative company that enables businesses to embrace technologies and empower them to achieve their business goals and objectives. Since our inception in the year 2009, we have been delivering customized technological solutions for our clients. With our core strength in technology, we have expanded our business verticals to training, recruitment, and entertainment sectors.
          </p>
        </div>

        <div>
          <center>
            <h1>Our History</h1>
          </center>
          <div className="cards-containerss">
            <div className="cardss">
              <div className="card-contentss">
                <i className="fas fa-globe"></i>
                <h3>GLOBAL PRESENCE</h3>
                <h6>9+COUNTRIES</h6>
              </div>
            </div>

            <div className="cardss">
              <div className="card-contentss">
                <i className="fas fa-industry"></i>
                <h3>INDUSTRIAL EXPERIENCE</h3>
                <h6>9+ YEARS</h6>
              </div>
            </div>

            <div className="cardss">
              <div className="card-contentss">
                <i className="fas fa-cogs"></i>
                <h3>INDUSTRIES SERVED</h3>
                <h6>25+ SECTORS</h6>
              </div>
            </div>

            <div className="cardss">
              <div className="card-contentss">
                <i className="fas fa-users"></i>
                <h3>TALENTFORCE</h3>
                <h6>50+ EMPLOYEES</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <History/>
      <Footer />
    </>
  );
};

export default AboutUs;
