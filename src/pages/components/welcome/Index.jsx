import Button from '../button/Index';
import Styles from './welcome.module.scss';
import NavBar from '../navbar/Index';


const Welcome = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <h1>O parceiro da sua dieta.</h1> 
                <p>Calcule dietas de maneira rápida e monte pratos variados para seu objetivo!</p>
                
                
            </div>
            <div>    
            <div className={Styles.videos}>
            <div className={Styles.videoContainer}>
                    {''}
                    <video className={Styles.video} autoPlay muted loop>
                        <source src="/images/videoteste.mp4" type="video/mp4" />
                        Seu navegador não suporta o formato de vídeo.
                    </video>
                    
                </div>
                 
            <div className={Styles.videoContainer2}>
                    {''}
                    <video className={Styles.video} autoPlay muted loop>
                        <source src="/images/videoteste.mp4" type="video/mp4" />
                        Seu navegador não suporta o formato de vídeo.
                    </video>
                    
                </div>
                </div>
                <h1 className={Styles.text}>Dietas alimentares de maneira pratica!</h1>
                
            </div>
            <Button title="Baixar app" kind="secundary" />
            <NavBar />
        </div>

    );
}

export default Welcome;
