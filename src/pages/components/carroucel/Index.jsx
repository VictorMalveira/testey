import React from 'react';
import Slider from "react-slick";
import Styles from './Carousel.module.scss';

const Carrousel = ({ slides, ...props }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props
    };

    return (
        <div className={Styles.carrouselContainer}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className={Styles.carouselItem}>
                        <img src={slide.src} alt={slide.alt} className={Styles.image} />
                        <div className={Styles.carouselText}>{slide.description}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carrousel;
