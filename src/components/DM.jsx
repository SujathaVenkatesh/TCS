import React from 'react';
import './DM.css';
import digi from './images/digi.jpg';

function DM() {
  return (
    <>
      <div className="nameg">
      </div>
      <div className="about-us-container">
        <h1 className="headp">Digital Marketing</h1>
        <hr className="horizontal-line" />

        <div className="about-us-content">
          <div className="image-container">
            <img src={digi} alt="companyImage" className="company-image" />
          </div>
          <div className="content-container">
            <p>
            Digital Marketing is a dynamic and ever-evolving field that encompasses various strategies and techniques to promote products, services, and brands in the digital space. It involves leveraging online channels such as search engines, social media, email marketing, content marketing, and more to reach and engage with target audiences.

In the realm of Digital Marketing, businesses employ tactics like search engine optimization (SEO) to improve their visibility on search engine result pages, pay-per-click (PPC) advertising to drive targeted traffic, and social media marketing to connect with customers on popular platforms.            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DM;
