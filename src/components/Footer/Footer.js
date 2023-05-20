import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.flourBackground}></div>
            <div className={styles.content}>
                <div className={styles.links}>
                    <Link to="/">Contacto</Link>
                    <Link to="/">Sobre Nosotros</Link>
                    <Link to="/">Ubicación</Link>
                </div>
                <div className={styles.createdBy}>
                    &copy; {new Date().getFullYear()} atcamo. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
