import Image from "next/image";
import logo from "./images/logo.svg";
import Link from "next/link";
import Styles from './menu.module.scss'
import Button from '../button/Index'
const Menu = () => {
    return <div className={Styles.container}>
        <div className={Styles.logotipo}>
            <Image src ={logo} alt="logo"/>

        </div>

        <div className={Styles.menu}>
        <div>
                <Link href="/">Home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
        </div>
        </div>

        <div className={Styles.action}>
            <Button className title="Fale conosco" />
        </div>
        
    </div>;
};

export default Menu
