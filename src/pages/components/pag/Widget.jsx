import React, { useState } from 'react';
import Menu from '../header/Index';
import Footer from '../footer/Index';
import Carousel from '../carroucel/Index';
import Styles from './pag1.module.scss';

const Widget = () => {
    const [contentVisible, setContentVisible] = useState(false);

    const toggleContent = () => {
        setContentVisible(!contentVisible);
    };

    return (
        <div className={Styles.container}>
            <Menu />
            <main className={Styles.main}>
                <h1 className={Styles.mainTitle}>Seu guia personalizado na sua dieta!</h1>
                <p className={Styles.mainSubtitle}>Para explicar o que fazemos, você precisa saber o que são os Macronutrientes.</p>
                
                <div className={`${Styles.expandableContent} ${contentVisible ? Styles.visible : ''}`}>
                    <h2 className={Styles.movCont}>Os macronutrientes são os nutrientes que nosso corpo necessita em grandes quantidades para obter energia e manter suas funções vitais. Eles são divididos em três categorias principais:</h2>
                    <Carousel slides={Styles.slides} />
                </div>
                <button onClick={toggleContent} className={Styles.secondaryButton}>
                    Clique aqui!
                </button>
            </main>
            <section className={Styles.section}>
                <h2 className={Styles.sectionTitle}>Features</h2>
                <div className={Styles.grid}>
                    <Feature
                        imgSrc="https://placehold.co/80x80?text=Icon"
                        altText="Meal analysis icon"
                        title="Meal Analysis"
                        description="Analyze your meals with a photo."
                    />
                    <Feature
                        imgSrc="https://placehold.co/80x80?text=Icon"
                        altText="Personalized plans icon"
                        title="Personalized Plans"
                        description="Get personalized meal plans."
                    />
                    <Feature
                        imgSrc="https://placehold.co/80x80?text=Icon"
                        altText="Nutritionist support icon"
                        title="Nutritionist Support"
                        description="Access support from nutritionists."
                    />
                    <Feature
                        imgSrc="https://placehold.co/80x80?text=Icon"
                        altText="Activity tracking icon"
                        title="Activity Tracking"
                        description="Track your physical activities and calories."
                    />
                </div>
            </section>
            <section className={Styles.section}>
                <h2 className={Styles.sectionTitle}>Testimonials</h2>
                <div className={Styles.grid}>
                    <Testimonial
                        imgSrc="https://placehold.co/80x80?text=User"
                        altText="User photo"
                        quote='"This app changed my life!"'
                        author="- Satisfied User"
                    />
                    <Testimonial
                        imgSrc="https://placehold.co/80x80?text=User"
                        altText="User photo"
                        quote='"I love the personalized plans."'
                        author="- Happy Customer"
                    />
                    <Testimonial
                        imgSrc="https://placehold.co/80x80?text=User"
                        altText="User photo"
                        quote='"Great support from nutritionists."'
                        author="- Grateful User"
                    />
                </div>
            </section>
            <section className={Styles.section}>
                <h2 className={Styles.sectionTitle}>Download the app and start your journey today!</h2>
                <button className={Styles.primaryButton}>Try it for free</button>
            </section>
            <Footer />
        </div>
    );
};

const Feature = ({ imgSrc, altText, title, description }) => (
    <div className={Styles.feature}>
        <img src={imgSrc} alt={altText} className={Styles.featureIcon} />
        <h3 className={Styles.featureTitle}>{title}</h3>
        <p>{description}</p>
    </div>
);

const Testimonial = ({ imgSrc, altText, quote, author }) => (
    <div className={Styles.testimonial}>
        <img src={imgSrc} alt={altText} className={Styles.testimonialPhoto} />
        <blockquote className={Styles.testimonialQuote}>{quote}</blockquote>
        <cite className={Styles.testimonialAuthor}>{author}</cite>
    </div>
);

export default Widget;
