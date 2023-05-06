import React from 'react'
import GitHub from './assets/Icons/GitHub';
import styles from "./CartWidget.module.css";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


function CartWitget() {

    const {totalQuantity} = useContext (CartContext)

    return (
        <div className={styles.cart}>
            <Link to="/cart" style ={{display: totalQuantity > 0 ? 'block' : 'none'}}>
                <GitHub className={styles.svg}/>
                <span className={styles.contador}>{totalQuantity}</span>
            </Link>
        </div>

    )
}

export default CartWitget