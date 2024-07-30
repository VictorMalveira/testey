import React from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';


const HeroSection = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1>4F O parceiro da sua dieta.</h1>
          <p>Calcule dietas de maneira rápida e monte pratos variados para seu objetivo!</p>
          <p>
            Integre corpo, mente e espiríto de forma 360º e sinta-se incrível desde o primeiro dia.
          </p>
          <button>Baixar App</button>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/telamenorbg.png" alt="Fitness Models" />
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <img src="https://openui.fly.dev/openui/24x24.svg?text=🖥" alt="Online or Offline" />
          <span>Disponível na PlayStore</span>
        </div>
        <div className={styles.infoItem}>
          <img src="https://openui.fly.dev/openui/24x24.svg?text=📱" alt="Mobile or TV" />
          <span>Dietas acompanhadas por profissionais</span>
        </div>
        <div className={styles.infoItem}>
          <img src="https://openui.fly.dev/openui/24x24.svg?text=🔒" alt="Secure Purchase" />
          <span>Compra segura</span>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          VOCÊ É <span>PROTAGONISTA</span> DA SUA TRANSFORMAÇÃO
        </h1>
        <p className={styles.text}>
          Por isso, você merece ter os resultados que tanto deseja. Como valorizamos o seu tempo e conforto, criamos programas exclusivos para você alcançá-los sem ficar estagnada.
        </p>
        <div className={styles.imageContainer}>
          <div className={styles.imageContainerInner}>
            {[1, 2, 3, 4, 5].map((index) => (
              <img key={index} src={`/imagesw/images${index}.jpg`} alt={`before-after-${index}`} className={styles.image} />
            ))}
            {[1, 2, 3, 4, 5].map((index) => (
              <img key={index + 5} src={`/imagesw/images${index}.jpg`} alt={`before-after-${index}`} className={styles.image} />
            ))}
          </div>
        </div>
        <div className={styles.flexCenter}>
        <Link href="https://4food.bubbleapps.io" target="_blank" className={styles.button}>
            QUERO ESSES RESULTADOS TAMBÉM
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
