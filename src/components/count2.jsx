import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './count2.css';
import factsImage from './images/port4.jpg';

const FactsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <section className="facts">
      <div className="container">
        <header className="section-header">
          <h3>Facts</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </header>

        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className="counter-container">
                <CountUp start={0} end={isVisible ? 232 : 0} duration={1} className="purecounter" />
                <p>Clients</p>
              </div>
            </VisibilitySensor>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className="counter-container">
                <CountUp start={0} end={isVisible ? 421 : 0} duration={1} className="purecounter" />
                <p>Projects</p>
              </div>
            </VisibilitySensor>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className="counter-container">
                <CountUp start={0} end={isVisible ? 1364 : 0} duration={1} className="purecounter" />
                <p>Hours Of Support</p>
              </div>
            </VisibilitySensor>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className="counter-container">
                <CountUp start={0} end={isVisible ? 38 : 0} duration={1} className="purecounter" />
                <p>Hard Workers</p>
              </div>
            </VisibilitySensor>
          </div>
        </div>

        <div className="facts-img">
          <img src={factsImage} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
