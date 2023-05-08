import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Checkout.module.css';


const Checkout = () => {
    const { cart } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(newTotal);
    }, [cart]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email !== confirmEmail) {
        alert('El correo electrónico y su confirmación no coinciden');
        return;
        }
        if (!/^[0-9]+$/.test(phoneNumber)) {
        alert('El número de teléfono debe ser un número');
        return;
        }
    };

    return (
        <div>
        <h1>Detalle de Solicitud</h1>
        <form className={styles['checkout-form']} onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" required className={styles['form-input']} />

            <label htmlFor="email">Correo electrónico</label>
            <input
            type="email"
            id="email"
            required
            className={styles['form-input']}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="email-confirm">Confirmar correo electrónico</label>
            <input
            type="email"
            id="email-confirm"
            required
            className={styles['form-input']}
            value={confirmEmail}
            onChange={(event) => setConfirmEmail(event.target.value)}
            />

            <label htmlFor="phone">Número de teléfono</label>
            <input
            type="text"
            id="phone"
            required
            className={styles['form-input']}
            pattern="[0-9]+"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            />

            <label htmlFor="address">Dirección</label>
            <input type="text" id="address" required className={styles['form-input']} />

            <label htmlFor="city">Ciudad</label>
            <input type="text" id="city" required className={styles['form-input']} />

            <label htmlFor="state">Estado o provincia</label>
            <input type="text" id="state" required className={styles['form-input']} />

            <h2>Resumen de la compra:</h2>
            {cart.map((item) => (
            <div key={item.id} className={styles['cart-item']}>
                <span>
                <strong>{item.name}</strong>
                </span>
                <span> Cantidad: {item.quantity},</span>
                <span> Precio unitario: ${item.price}</span>
            </div>
            ))}
            <h3>Total: ${cartTotal}</h3>

            <button type='submit' className={styles['form-submit-btn']}>
            Completar compra
            </button>
        </form>
        </div>
    );
};

export default Checkout;