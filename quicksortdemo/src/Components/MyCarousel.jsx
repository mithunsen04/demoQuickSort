


import React, { useEffect, useState, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import './MyCarousel.css';

export default function MyCarousel() {
  const [index, setIndex] = useState(0);
  const carouselRef = React.useRef(null);
  const [carouselHeight, setCarouselHeight] = React.useState(0);

  React.useEffect(() => {
    if (carouselRef.current) {
      const height = carouselRef.current.clientHeight;
      setCarouselHeight(height);
    }
  }, []);
  const getImageStyles = () => {
    return {
      width: '100%',
      height: carouselHeight,
      objectFit: 'cover',
    };
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
    <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} interval={null} pause={false}>
      <Carousel.Item>
        <img
          src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/36882NLP-e1595362635214.jpg"
          className="d-block "
          alt="Slide 1"
          style={getImageStyles()}

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
          className="d-block "
          alt="Slide 2"
          style={getImageStyles()}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
          className="d-block"
          alt="Slide 3"
          style={getImageStyles()}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}



