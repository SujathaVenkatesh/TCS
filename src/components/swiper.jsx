import React, { useState} from 'react';
import 'swiper/swiper-bundle.min.css';
import tcs1 from './images/tcs1.jpg';
import './swiper.css';

function Carousel() {
    const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImage(true);
  };

  return (
    <div className="swiper-container">
      <h1 className="swiper">Belief in action
</h1>
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="cardname">
            <div className="card__image">
            <img src={tcs1} alt="cardimage" onClick={() => handleImageClick(tcs1)} />
            </div>
            <div className="card__content">
              <span className="card__title">A new,nimble NWC</span>
              <span className="card__name">tcs</span>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis labore provident non tempora
                odio est sunt, ipsum.
              </p>
              <button className="card__btn">View More</button>
            </div>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="cardname">
            <div className="card__image">
            <img src={tcs1} alt="cardimage" onClick={() => handleImageClick(tcs1)} />
            </div>
            <div className="card__content">
              <span className="card__title">UI Designer</span>
              <span className="card__name">tcs</span>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis labore provident non tempora
                odio est sunt, ipsum.
              </p>
              <button className="card__btn">View More</button>
            </div>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="cardname">
            <div className="card__image">
            <img src={tcs1} alt="cardimage" onClick={() => handleImageClick(tcs1)} />
            </div>
            <div className="card__content">
              <span className="card__title">Web Developer</span>
              <span className="card__name">tcs</span>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis labore provident non tempora
                odio est sunt, ipsum.
              </p>
              <button className="card__btn">View More</button>
            </div>
          </div>
        </div>
        {showImage && (
        <div className="fullscreen-image">
          <img src={selectedImage} alt="fullscreenimage" onClick={() => setShowImage(false)} />
        </div>
      )}
        </div>
    </div>
    </div>
  );
}

export default Carousel;
