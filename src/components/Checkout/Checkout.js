import React, { useContext, useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from "../../config/firebase";
import { CartContext } from '../../context/CartContext';
import styles from './Checkout.module.css';
import Ticket from '../Ticket/Ticket';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [generatedTicket, setGeneratedTicket] = useState(null);

    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(newTotal);
    }, [cart]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email !== confirmEmail) {
            alert('El correo electrónico y su confirmación no coinciden');
            return;
        }
        if (!/^[0-9]+$/.test(phoneNumber)) {
            alert('El número de teléfono debe ser un número');
            return;
        }
    
        try {
            // Enviar datos del formulario a Firebase
            const docRef = await addDoc(collection(db, "tickets"), {
                name,
                email,
                phoneNumber,
                address,
                city,
                state
            });
    
            // Generar el ticket y devolverlo al comprador
            const ticket = {
                id: docRef.id,
                name,
                email,
                phoneNumber,
                address,
                city,
                state
            };
            console.log('Ticket generado:', ticket);
            setGeneratedTicket(ticket);

            clearCart();

        } catch (error) {
            console.error('Error al guardar el formulario en Firebase:', error);
        }
    };

    return (
        <div>
            {generatedTicket ? (
                <Ticket ticket={generatedTicket} />
            ) : (
                <div>
                    <h1>Detalle de Solicitud</h1>
                    <form className={styles['checkout-form']} onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombre completo</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className={styles['form-input']}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

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
                        <input
                            type="text"
                            id="address"
                            required
                            className={styles['form-input']}
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />

                        <label htmlFor="city">Ciudad</label>
                        <input
                            type="text"
                            id="city"
                            required
                            className={styles['form-input']}
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />

                        <label htmlFor="state">Estado o provincia</label>
                        <input
                            type="text"
                            id="state"
                            required
                            className={styles['form-input']}
                            value={state}
                            onChange={(event) => setState(event.target.value)}
                        />

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
            )}
        </div>
    );
};

export default Checkout;
