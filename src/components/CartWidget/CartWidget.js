import React from 'react'
import GitHub from './assets/Icons/GitHub';
import styles from "./CartWidget.module.css";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
    const { cart } = useContext(CartContext);
    const distinctProducts = new Set(cart.map(item => item.id));
    const totalDistinctProducts = distinctProducts.size;

    return (
        <div className={styles.cart}>
            <Link to="/cart">
                <GitHub className={styles.svg}/>
            </Link>
            {totalDistinctProducts > 0 && (
                <span className={styles.contador}>{totalDistinctProducts}</span>
            )}
        </div>
    );
}

export default CartWidget;
