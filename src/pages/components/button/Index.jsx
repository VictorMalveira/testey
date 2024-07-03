import React from 'react';
import Styles from './button.module.scss';

const Button = ({ title, kind }) => {
    const generationClasByKind = () => {
        if (kind === 'secundary') return Styles.secundary;
        return Styles.primary;
    };

    return (
        <button  className={`${Styles.button} ${generationClasByKind()}`}>
            {title}
        </button>
    );
};

export default Button;
