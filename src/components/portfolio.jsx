import React from 'react';
import './portfolio.css';
import name5 from './images/name5.avif';
import tcs3 from './images/tcs3.jpeg';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio_section">
    <h5 className="portfolio_subheading">Our Recent Projects</h5>
      <div className="portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={name5} alt="name" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={name5} alt="name" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              github
            </a>
            <a
              href="https://whytap.in/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={tcs3} alt="name" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              github
            </a>
            <a
              href="https://wgsdev.whyglobalservices.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={name5} alt="name" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={tcs3} alt="name" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={name5} alt="name" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
