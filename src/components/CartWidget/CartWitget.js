import React from 'react'
import GitHub from './assets/Icons/GitHub';
import styles from "./CartWidget.module.css";

function CartWitget() {
    return (
        <div className={styles.cart}>
            <GitHub className={styles.svg}/>
            <span className={styles.contador}>0</span>
        </div>

    )
}

export default CartWitget