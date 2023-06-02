import React, { useState} from 'react';
import 'swiper/swiper-bundle.min.css';
import web from './images/web.jpg';
import digital from './images/digital.avif';
import ui from './images/ui.avif';
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
            <img src={digital} alt="cardimage" onClick={() => handleImageClick(digital)} />
            </div>
            <div className="card__content">
              <span className="card__title">Digital Marketing</span>
              <span className="card__name">Engagement</span>
              <p className="card__text">
               It involves the power of the internet, socialmedia platforms, search engines, email marketing, content marketing, and other digital mediums to reach and engage with target audiences.          
            </p>
            <a href="/DM">
  <button class="card__btn">View More</button>
</a>
            </div>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="cardname">
            <div className="card__image">
            <img src={ui} alt="cardimage" onClick={() => handleImageClick(ui)} />
            </div>
            <div className="card__content">
              <span className="card__title">UI Designer</span>
              <span className="card__name">Creativity</span>
              <p className="card__text">
              As a UI designer, I specialize in creating visually appealing and user-friendly interfaces for digital products. With a keen eye for aesthetics and a strong understanding of user experience.</p>
              <a href="/UI">
  <button class="card__btn">View More</button>
</a>            </div>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="cardname">
            <div className="card__image">
            <img src={web} alt="cardimage" onClick={() => handleImageClick(web)} />
            </div>
            <div className="card__content">
              <span className="card__title">Web Developer</span>
              <span className="card__name">Coding</span>
              <p className="card__text">
              As a web developer,I have a passion for creating dynamic and interactive websites that provide seamless user experiences. With a strong foundation in web development technologies.


              </p>
                    <a href="/Webs">
  <button class="card__btn">View More</button>
</a>         </div>
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