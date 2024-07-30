import React, { useState } from 'react';
import Menu from '../header/Index';
import Footer from '../footer/Index';
import Carrousel from '../carroucel/Index';
import Styles from './pag1.module.scss';

const Widget = () => {
    const [contentVisible, setContentVisible] = useState(false);

    const toggleContent = () => {
        setContentVisible(!contentVisible);
    };

    // Dados dos slides com descrições
    const slides = [
        {
            src: "/images/imagem1.jpg",
            alt: "Slide 1",
            description: "Descrição da Imagem 1"
        },
        {
            src: "/images/imagem2.jpg",
            alt: "Slide 2",
            description: "Descrição da Imagem 2"
        },
        {
            src: "/images/imagem3.jpg",
            alt: "Slide 3",
            description: "Descrição da Imagem 3"
        }
    ];

    return (
        <div className={Styles.container}>
            <Menu />
            <main className={Styles.main}>
                <h1 className={Styles.mainTitle}>Seu guia personalizado na sua dieta!</h1>
                <p className={Styles.mainSubtitle}>Para explicar o que fazemos, você precisa saber o que são os Macronutrientes.</p>
                
                <div className={`${Styles.expandableContent} ${contentVisible ? Styles.visible : ''}`}>
                    <Carrousel slides={slides} />
                </div>
                <button onClick={toggleContent} className={Styles.secondaryButton}>
                    Clique aqui!
                </button>
            </main>            <section className={Styles.section}>
                <h2 className={Styles.sectionTitle}>Features</h2>
                <div className={Styles.grid}>
                    <div className={Styles.feature}>
                        <img src="https://placehold.co/80x80?text=Icon" alt="Meal analysis icon" className={Styles.featureIcon} />
                        <h3 className={Styles.featureTitle}>Meal Analysis</h3>
                        <p>Analyze your meals with a photo.</p>
                    </div>
                    <div className={Styles.feature}>
                        <img src="https://placehold.co/80x80?text=Icon" alt="Personalized plans icon" className={Styles.featureIcon} />
                        <h3 className={Styles.featureTitle}>Personalized Plans</h3>
                        <p>Get personalized meal plans.</p>
                    </div>
                    <div className={Styles.feature}>
                        <img src="https://placehold.co/80x80?text=Icon" alt="Nutritionist support icon" className={Styles.featureIcon} />
                        <h3 className={Styles.featureTitle}>Nutritionist Support</h3>
                        <p>Access support from nutritionists.</p>
                    </div>
                    <div className={Styles.feature}>
                        <img src="https://placehold.co/80x80?text=Icon" alt="Activity tracking icon" className={Styles.featureIcon} />
                        <h3 className={Styles.featureTitle}>Activity Tracking</h3>
                        <p>Track your physical activities and calories.</p>
                    </div>
                </div>
            </section>
            <section className={Styles.section}>
                <h2 className={Styles.sectionTitle}>Testimonials</h2>
                <div className={Styles.grid}>
                    <div className={Styles.testimonial}>
                        <img src="https://placehold.co/80x80?text=User" alt="User photo" className={Styles.testimonialPhoto} />
                        <blockquote className={Styles.testimonialQuote}>"This app changed my life!"</blockquote>
                        <cite className={Styles.testimonialAuthor}>- Satisfied User</cite>
                    </div>
                    <div className={Styles.testimonial}>
                        <img src="https://placehold.co/80x80?text=User" alt="User photo" className={Styles.testimonialPhoto} />
                        <blockquote className={Styles.testimonialQuote}>"I love the personalized plans."</blockquote>
                        <cite className={Styles.testimonialAuthor}>- Happy Customer</cite>
                    </div>
                    <div className={Styles.testimonial}>
                        <img src="https://placehold.co/80x80?text=User" alt="User photo" className={Styles.testimonialPhoto} />
                        <blockquote className={Styles.testimonialQuote}>"Great support from nutritionists."</blockquote>
                        <cite className={Styles.testimonialAuthor}>- Grateful User</cite>
                    </div>
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

export default Widget;
