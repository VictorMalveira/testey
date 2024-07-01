import Image from "next/image";
import logo from "./images/logo.svg";
import Link from "next/link";
import Styles from './menu.module.scss'
const Menu = () => {
    return <div className={Styles.container}>
        <div className={Styles.logotipo}>
            <Image src ={logo}/>

        </div>

        <div className={Styles.menu}>
        <div>
                <Link href="/">Home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
        </div>
        </div>

        <div className={Styles.action}>
            <button className={Styles.button}>Fale conosco</button>
        </div>
        
    </div>;

};

export default Menu
