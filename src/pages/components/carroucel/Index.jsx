// components/Carousel.js
import React, { useEffect, useState, useRef } from 'react';
import styles from '../carroucel/Carousel.module.scss';

const images = [
  '/images/imagem1.jpg',
  '/images/imagem2.jpg',
  '/images/imagem3.jpg',
  '/images/imagem1.jpg',
  '/images/imagem2.jpg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const carouselRef = useRef(null);
  
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); 
    };
  
    const stopAutoSlide = () => {
      clearInterval(intervalRef.current);
    };
  
    useEffect(() => {
      startAutoSlide();
      return () => stopAutoSlide();
    }, []);
  
    useEffect(() => {
      const carouselInner = carouselRef.current;
      if (currentIndex === images.length) {
        carouselInner.style.transition = 'none';
        setCurrentIndex(0);
        setTimeout(() => {
          carouselInner.style.transition = 'transform 1s ease-in-out';
        }, 20);
      }
    }, [currentIndex]);
  
    return (
      <div className={styles.carousel}>
        <div
          ref={carouselRef}
          className={styles.carouselInner}
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {images.concat(images).map((image, index) => (
            <div className={styles.carouselItem} key={index} style={{ backgroundImage: `url(${image})` }}></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;