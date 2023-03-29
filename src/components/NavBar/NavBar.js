import React from 'react'
import CartWidget from '../CartWidget/CartWitget';
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <div>
        <nav className={styles.nav}>
          <h1 className={styles.nameWeb}>Titi gluten Free</h1>
          <ul>
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Contacto</li>
          </ul>
          <CartWidget />
        </nav>
      </div>
    </>
  )
}

export default NavBar