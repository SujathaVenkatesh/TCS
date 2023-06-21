import React, { useState } from 'react';
import './count2.css';

const TeamCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="outer-div">
      <div className="inner-div">
        <div className={`team-card-1 ${expanded ? 'expand' : ''}`}>
          <div
            className={`image-card-1 ${expanded ? 'color-reveal' : ''}`}
            style={{
              background:
                "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9)), url('https://res.cloudinary.com/georgeassan/image/upload/v1564477808/xpDLrRKA_pqiddz.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className={`team-info ${expanded ? 'text-reduce' : ''}`}>
              <p>Margaret Monroe</p>
              <p>Lead Designer</p>
            </div>
          </div>
          <div className={`expand-btn-1`} onClick={handleExpandClick}>
            <div className="left-bar"></div>
            <div className="right-bar"></div>
          </div>
          <div className={`role-description ${expanded ? 'expand' : ''}`}>
            <div className={`team-info-des ${expanded ? 'text-reveal-1' : ''}`}>
              <p>Margaret Monroe</p>
              <p>Lead Designer</p>
            </div>
            <div className="line"></div>
            <div className={`body-text-1 ${expanded ? 'text-reveal-1' : ''}`}>
              <p>
                Our reigning Uno, Blackjack, paintball, karaoke champion.... Yup, the girl's good. Nothing stops Maggie M from giving us her best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
