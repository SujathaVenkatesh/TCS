import React, { useState, useEffect,useCallback } from "react";
import "./sercon.css";

const Sercon = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-0.3.5&s=9a7336a358f84eccc3c50f9b754c4bae&auto=format&fit=crop&w=1350&q=80",
      title: "Web Development",
    },
    {
      url: "C:/Users/SUJATHA V/OneDrive/Desktop/React web/reactwebpro/webproject/src/components/images/imge8.jpg",
      title: "Digital Marketing",
    },
    {
      url: "C:/Users/SUJATHA V/OneDrive/Desktop/React web/reactwebpro/webproject/src/components/images/ecom.jpg",
      title: "Product Development",
    },
    {
      url: "C:/Users/SUJATHA V/OneDrive/Desktop/React web/reactwebpro/webproject/src/components/images/imge4.jpg",
      title: "Content Development",
    },
  ];

  const rotateCircle = useCallback((direction) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  }, [images.length]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      rotateCircle(1);
    }, 3000);
  
    return () => {
      clearInterval(interval);
    };
  }, [rotateCircle]);
  
  return (
    <div className="services">
      <div className="circle--slider">
        <div className="prev" onClick={() => rotateCircle(-1)}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="next" onClick={() => rotateCircle(1)}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="rotate--circle">
          <ul className="circle--rotate">
            {images.map((image, index) => (
              <li
                key={index}
                className={`block ${index === activeIndex ? "active" : ""}`}
                style={{
                  transform: `rotate(${index * (360 / images.length)}deg)`,
                }}
              ></li>
            ))}
          </ul>
        </div>
        <div className="animate-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`animate ${index === activeIndex ? `animate-${index}` : ""}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="image-title">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sercon;
