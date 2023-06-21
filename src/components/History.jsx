import React, { useState } from 'react';
import './History.css';
import mission1 from './images/Mission1.jpg'; 
import vission from './images/vission.webp';

function History() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  return (
    <>
    <div class="history-session">
    <video src="path/to/video.mp4" autoplay loop muted></video>
    </div>
    <div className="card-container">
      <div className={`cardname ${isFlipped1 ? 'flipped' : ''}`} onClick={handleClick1}>
        <div className="cardr">
          <div className="front">
            <img src={mission1} alt="services" />
          </div>
          <div className="back">
            <h3>Our Mission </h3>
            <i className="fas fa-bullseye fa-10x orange-icon"></i>
            <p>
              To provide clever and innovative business solutions to fulfill the business needs of the customers all over the world.
            </p>
          </div>
        </div>
      </div>

      <div className={`cardname ${isFlipped2 ? 'flipped' : ''}`} onClick={handleClick2}>
        <div className="cardr">
          <div className="front">
            <img src={vission} alt="services" />
          </div>
          <div className="back">
            <h3>Our Vision</h3>
            <i className="fas fa-eye fa-10x orange-icon"></i> {/* Updated the icon class */}
            <p>
            Our vision is to be the “partner of choice” for customers striving to get the edge in the highly competitive business environment by providing most innovative solutions to enhance their productivity interms of increasing sales and saving time.            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default History;