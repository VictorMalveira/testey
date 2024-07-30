import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.container}>
                <div className={Styles.links}>
                    <Link href="/" className={Styles.link}>Terms of Service</Link>
                    <Link href="/" className={Styles.link}>Privacy Policy</Link>
                    <Link href="/" className={Styles.link}>Contact Us</Link>
                </div>
                <div className={Styles.social}>
                    <Link href="https://www.facebook.com" target="_blank" className={Styles.socialLink}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className={Styles.socialLink}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" className={Styles.socialLink}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>
                <div className={Styles.developed}>
                    <span>&#169; Desenvolvido por <a href="https://www.instagram.com/victor_malveira.sites" target="_blank" className={Styles.developerLink}>Victor Malveira</a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
