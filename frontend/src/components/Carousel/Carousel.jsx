import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';
import CheckOfferBtn from '../CheckOfferBtn/CheckOfferBtn';
import { useTranslation } from 'react-i18next';

const Carousel = ({ images }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextSlide();
    }

    if (touchStart - touchEnd < -150) {
      prevSlide();
    }
  };

  return (
    <div
      className="carousel Container2"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          />
        ))}
      </div>
      <div className="overlay"></div>
      <div className="carousel-info Container">
        <p className="hero-header">{t('carouselHeader')}</p>
        <p className="hero-header-p">{t('carouselSubheader')}</p>
        <CheckOfferBtn />
      </div>
    </div>
  );
};

export default Carousel;
