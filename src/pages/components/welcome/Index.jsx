import Button from '../button/Index';
import Styles from './welcome.module.scss';
import Carrousel from '../carroucel/Index'


const Welcome = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <h1>O parceiro da sua dieta.</h1> 
                <p>Calcule dietas de maneira rápida e monte pratos variados para seu objetivo!</p>
            </div>
            <div className={Styles.videos}>
                <div className={Styles.videoContainer}>
                    <video className={Styles.video} autoPlay muted loop>
                        <source src="/images/video2.mp4" type="video/mp4" />
                    </video>
                    <p className={Styles.caption}>Defina suas metas.</p>
                </div>
                <div className={Styles.videoContainer2}>
                    <video className={Styles.video} autoPlay muted loop>
                        <source src="/images/video1.mp4" type="video/mp4" />
                        Seu navegador não suporta o formato de vídeo.
                    </video>
                    <h1 className={Styles.caption}>Escolha sua dieta.</h1>
                </div>
            </div>
            <Button title="Baixar app" kind="secundary" />
            <Carrousel />
        </div>
    );
}

export default Welcome;
