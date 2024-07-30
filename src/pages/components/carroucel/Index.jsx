// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss'; // Caminho para o CSS do carrossel

// Adicione as imagens que você deseja usar
const images = [
  '/images/1.jpg',
  '/images/2-copy.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <div className={styles.nextArrow}>›</div>,
    prevArrow: <div className={styles.prevArrow}>‹</div>,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
