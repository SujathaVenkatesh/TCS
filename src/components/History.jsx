import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBrain, faImage } from '@fortawesome/free-solid-svg-icons';
import './History.css';
import mission from './images/missionab.jpg';
import abplan from './images/abplan.jpg';
import abvission from './images/abvission.jpg';
const AboutSection = () => {
  return (
    <section id="about">
      <div className="containerhis" data-aos="fade-up">
        <div className="row about-cols">

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="about-col">
              <div className="img">
                <img src={mission} alt="sour" className="img-fluid" />
                <div className="icon"><FontAwesomeIcon icon={faChartBar} /></div>
              </div>
              <h2 className="title"><a href="plan">Our Mission</a></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="about-col">
              <div className="img">
                <img src={abplan} alt="sour" className="img-fluid" />
                <div className="icon"><FontAwesomeIcon icon={faBrain} /></div>
              </div>
              <h2 className="title"><a href="plan">Our Plan</a></h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="about-col">
              <div className="img">
                <img src={abvission} alt="sour" className="img-fluid" />
                <div className="icon"><FontAwesomeIcon icon={faImage} /></div>
              </div>
              <h2 className="title"><a href="plan">Our Vision</a></h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
