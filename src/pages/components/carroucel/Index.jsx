import React from 'react';
import styles from './Carousel.module.scss';

const caroselData = [
    {
        name: 'Carboidrato',
        image: '/images/carboidrato.png',
        
        review: [
            " São a principal fonte de energia do corpo. Encontrados em alimentos como pães, massas, frutas e vegetais, os carboidratos são convertidos em glicose, que alimenta nossos músculos e cérebro."
        ]
    },
    {
        name: 'Proteínas',
        image: '/images/proteina.png',
        review: [
            " Essenciais para a construção e reparo dos tecidos do corpo, as proteínas são encontradas em carnes, peixes, ovos, laticínios, leguminosas e nozes. Elas são formadas por aminoácidos, que desempenham diversas funções importantes no organismo."
        ]
    },
    {
        name: 'Gorduras',
        image: '/images/grodura.png',
        review: [
            "Apesar de serem frequentemente vistas de forma negativa, as gorduras são vitais para a saúde. Elas fornecem energia, protegem os órgãos e ajudam na absorção de vitaminas. Fontes de gorduras incluem óleos, manteiga, abacate e nozes."
        ]
    }
];

const CaroselCard = ({ name, age, image, premium, weightLost, review }) => (
    <div className={styles.caroselCard}>
        <img className={styles.caroselImage} src={image} alt={`${name}, ${age}`} />
        <h3 className={styles.caroselText}>{name}, {age}</h3>
        <span className={styles.caroselSubtext}>{premium}</span>
        <p className="mt-2 text-lg font-medium">{weightLost}</p>
        <blockquote className={styles.caroselReview}>
            {review.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </blockquote>
    </div>
);

const Carosel = () => (
    <div className={styles.caroselContainer}>
        
        {caroselData.map((testimonial, index) => (
            <CaroselCard key={index} {...testimonial} />
        ))}
    </div>
);

export default Carosel;