import React from 'react';
import './snap.css';

import img1 from './images/imge1.jpg';
import img2 from './images/imge2.jpg';
import img3 from './images/imge3.jpg';

function Snap() {
  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h1>Carousel Slider</h1>
      <div className="carousel-slider">
        <div className="carousel-slide">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="img"
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-controls">
          <button onClick={goToPrevSlide}>Previous</button>
          <button onClick={goToNextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Snap;
