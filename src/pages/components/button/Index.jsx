import React from 'react';
import Styles from './button.module.scss';

const Button = ({ title, kind, href }) => {
    const generationClasByKind = () => {
        if (kind === 'secundary') return Styles.secundary;
        return Styles.primary;
    };

    return (
        href ? (
            <a href={href} className={`${Styles.button} ${generationClasByKind()}`} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        ) : (
            <button className={`${Styles.button} ${generationClasByKind()}`}>
                {title}
            </button>
        )
    );
};

export default Button;
