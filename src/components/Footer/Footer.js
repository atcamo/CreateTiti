import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.flourBackground}></div>
        <div className={styles.content}>
            <div className={styles.links}>
            <a href="#">Contacto</a>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Ubicación</a>
            </div>
            <div className={styles.createdBy}>
            &copy; {new Date().getFullYear()} atcamo. Todos los derechos reservados.
            </div>
        </div>
        </footer>
    );
};

export default Footer;