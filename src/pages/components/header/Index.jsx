import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from './images/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Styles from './menu.module.scss';
import Button from '../button/Index';

const Menu = () => {
    const { pathname } = useRouter();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        // Check on mount
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={Styles.container}>
            <div className={Styles.logotipo}>
                <Image src={logo} alt="logo" className={Styles.logoImage} />
            </div>

            <div className={Styles.menu}>
                <Link href="/" className={`${Styles.menuItem} ${pathname === '/' ? Styles.active : ''}`}>Home</Link>
                <Link href="/components/pag/Widget" className={`${Styles.menuItem} ${pathname === '/components/pag/Widget' ? Styles.active : ''}`}>O que fazemos</Link>
                <Link href='/components/pag/Cases' className={`${Styles.menuItem} ${pathname === '/components/pag/Cases' ? Styles.active : ''}`}>Cases</Link>
            </div>

            <div className={Styles.action}>
                <Button href="https://play.google.com/store/apps/details?id=com.example.app" title="Download" />
            </div>

            {isMobile && (
                <button className={Styles.sidebarToggle} onClick={toggleSidebar}>
                    ☰
                </button>
            )}

            <div className={`${Styles.sidebar} ${isSidebarOpen ? Styles.open : ''}`}>
                <button className={Styles.closeSidebar} onClick={toggleSidebar}>×</button>
                <Link href="/" className={`${Styles.menuItem} ${pathname === '/' ? Styles.active : ''}`} onClick={toggleSidebar}>Home</Link>
                <Link href="/components/pag/Widget" className={`${Styles.menuItem} ${pathname === '/components/pag/Widget' ? Styles.active : ''}`} onClick={toggleSidebar}>O que fazemos</Link>
                <Link href="/cases" className={`${Styles.menuItem} ${pathname === '/cases' ? Styles.active : ''}`} onClick={toggleSidebar}>Cases</Link>
                <div className={Styles.sidebarAction}>
                    <Button href="https://play.google.com/store/apps/details?id=com.example.app" title="Download" />
                </div>
            </div>
        </div>
    );
};

export default Menu;
