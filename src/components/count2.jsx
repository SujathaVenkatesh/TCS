import React from 'react';
import { FaCode, FaBriefcase, FaMoneyBill, FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';
import './count2.css'; // Import the CSS file for styling

import leftImage from './images/imge3.jpg'; // Replace 'leftImage.jpg' with your actual image file

const Count = () => {
  return (
    <div className="containerp">
      <div className="left-sidep">
        <img src={leftImage} alt="LeftImage" className="left-image" />
      </div>
      <div className="right-sidep">
        <div className="counterp">
          <CountUp
            end={100}
            duration={5}
            suffix="%"
            className="hps large"
          />
          <h2>Your Preferred Technology Partner</h2>
        </div>
        <div className="iconsp">
          <div className="row">
            <div className="iconp">
              <FaMoneyBill className="icon-animation" />
              <p>Reduction in IT costs for many of our clients</p>
              <CountUp end={500} duration={5} suffix="+" className="icon-number" />
            </div>
            <div className="iconp">
              <FaCode className="icon-animation" />
              <p className="pppkd">Experience in the IT field</p>
              <CountUp end={100} duration={5} suffix="+" className="icon-number" />
            </div>
          </div>
          <div className="row">
            <div className="iconp">
              <FaBriefcase className="icon-animation" />
              <p>Projects Delivered</p>
              <CountUp end={412} duration={5} suffix="+" className="icon-number" />
            </div>
            <div className="iconp">
              <FaUsers className="icon-animation" />
              <p>Happy Clients</p>
              <CountUp end={100} duration={5} suffix="+" className="icon-number" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
