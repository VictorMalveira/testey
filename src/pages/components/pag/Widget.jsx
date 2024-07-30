// src/components/Widget.js
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './pag1.module.scss';
import Menu from '../header/Index'
import Footer from '../footer/Index'

const Widget = () => {
    const [imageVisible, setImageVisible] = useState(false);

    const toggleImage = () => {
        setImageVisible(!imageVisible);
        if (!imageVisible) {
            document.body.classList.add(Styles.darkMode);
        } else {
            document.body.classList.remove(Styles.darkMode);
        }
    };

    return (
        <div className={Styles.container}>
            <Menu />

            <main className={Styles.main}>
                <h1 className={Styles.mainTitle}>Seu guia personazado na sua dieta!</h1>
                <p className={Styles.mainSubtitle}>Para exlicar o que fazemos, você precisa saber o que são os Macronutrientes.</p>
                <button onClick={toggleImage} className={Styles.secondaryButton}>
                    Clique aqui!
                </button>
                <div className={Styles.flex}>
                    <Link href="#" className={Styles.appButton}>App Store</Link>
                    <Link href="#" className={Styles.appButton}>Google Play</Link>
                </div>
                {imageVisible && (
                    <div className={Styles.imageContainer}>
                        <img src="/tudo-sobre-os-macronutrientes.jpg" alt="Smartphone displaying the app" className={Styles.mainImage} />
                        <div className={Styles.additionalText}>
                            <h2>O que são Macronutrientes?</h2>
                            <p>Os macronutrientes são nutrientes que o corpo necessita em grandes quantidades para manter suas funções vitais e fornecer energia. Eles são essenciais para o crescimento, metabolismo e outras funções corporais importantes. Existem três principais tipos de macronutrientes:</p>

                            <h3>Carboidratos</h3>
                            <p><strong>Função:</strong> Fornecem energia rápida para o corpo.</p>
                            <p><strong>Fontes:</strong> Pães, massas, frutas, vegetais e grãos.</p>
                            <p><strong>Importância:</strong> São a principal fonte de energia para o cérebro e músculos durante atividades físicas.</p>

                            <h3>Proteínas</h3>
                            <p><strong>Função:</strong> Construção e reparação dos tecidos corporais, incluindo músculos e órgãos.</p>
                            <p><strong>Fontes:</strong> Carnes, peixes, ovos, leguminosas e produtos lácteos.</p>
                            <p><strong>Importância:</strong> Essenciais para o crescimento e desenvolvimento, além de desempenhar um papel crucial na produção de enzimas e hormônios.</p>

                            <h3>Gorduras</h3>
                            <p><strong>Função:</strong> Armazenamento de energia, proteção de órgãos vitais e manutenção da temperatura corporal.</p>
                            <p><strong>Fontes:</strong> Óleos, manteiga, nozes, sementes e peixes gordurosos.</p>
                            <p><strong>Importância:</strong> Necessárias para a absorção de vitaminas lipossolúveis (A, D, E e K) e para a produção de hormônios.</p>

                            <p>Uma dieta equilibrada deve incluir uma quantidade adequada de cada um desses macronutrientes para garantir a saúde e o bem-estar geral.</p>
                        </div>
                    </div>
                )}
            </main>
            <section className={Styles.section}>
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
