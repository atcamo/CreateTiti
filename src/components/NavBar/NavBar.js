import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import styles from "./NavBar.module.css";
import { Link, NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <>
      <div>
        <nav className={styles.nav}>
          <Link to='/'>
            <h1 className={styles.nameWeb}>Titi gluten Free</h1>
          </Link>
          <div>
            <NavLink to={`/`} >Productos</NavLink>
            <NavLink to={`/category/Harina`} >Harina</NavLink>
            <NavLink to={`/category/Mezcla`} >Mezcla</NavLink>
          </div>
          <CartWidget />
        </nav>
      </div>
    </>
  )
}

export default NavBar