import Image from "next/image";
import React from 'react';
import logo from "./images/logo.png";
import Link from "next/link";
import Styles from './menu.module.scss'
import Button from '../button/Index'
const Menu = () => {
    return <div className={Styles.container}>
        <div className={Styles.logotipo}>
            <Image src ={logo} alt="logo"/>

        </div>

        <div className={Styles.menu}>
                <Link href="/">Home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
        </div>

        <div className={Styles.action}>
            <Button className title="Fale conosco" />
        </div>
        
    </div>;
};

export default Menu
