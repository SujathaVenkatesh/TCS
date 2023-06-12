import React from 'react';
import tcs2 from './images/tcs2.jpg';
import './session.css';
import { Link } from 'react-router-dom';

function Session() {
  return (
    <section id="suja">
      <div className="session-container">
        <h1 className="session-heading animated-heading">WHO WE ARE</h1>
        <hr />

        <div className="columns-container">
          <div className="column">
            <div className="about-img">
              <img src={tcs2} className="border-bottom animated-image" alt="services" />
            </div>
          </div>

          <div className="column">
            <div className="about-content">
              <h3 className="heading animated-heading">About Us</h3>
              <br />
              <h1 className="animated-headings">We build greater futures<br />through innovation and<br />collective knowledge.</h1>
              <br />
              <p className="animated-heading">
                We enable businesses to embrace technologies and empower them to achieve their
                business goals and objectives.
              </p>
              <button className="link-button animated-heading">
                <Link to="/AboutUs">Get to know us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Session;
