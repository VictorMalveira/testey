import Button from '../button/Index';
import Styles from './welcome.module.scss'
const Welcome = () =>{
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>O melhor app de dietas e orentação aliemtar"</h1> <p>Que vai te deixar em forma de maneira mais pratica!</p> 
        </div>
        <Button title="Baixar app" kind="secundary"/>
        <div className={Styles.image}></div>
    </div>;
}

export default Welcome;