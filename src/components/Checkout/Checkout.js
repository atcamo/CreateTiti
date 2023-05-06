import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Checkout.module.css';

const Checkout = () => {
    const { cart, total } = useContext(CartContext);

    return (
        <div>
        <h1>Checkout</h1>
        <form className={styles['checkout-form']}>
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" required className={styles['form-input']} />

            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" required className={styles['form-input']} />

            <label htmlFor="address">Dirección</label>
            <input type="text" id="address" required className={styles['form-input']} />

            <label htmlFor="city">Ciudad</label>
            <input type="text" id="city" required className={styles['form-input']} />

            <label htmlFor="state">Estado o provincia</label>
            <input type="text" id="state" required className={styles['form-input']} />

            <label htmlFor="zipcode">Código postal</label>
            <input type="text" id="zipcode" required className={styles['form-input']} />

            <h3>Total: ${total}</h3>

            <button type="submit" className={styles['form-submit-btn']}>Completar compra</button>
            </form>
        </div>
    );
};

export default Checkout;
