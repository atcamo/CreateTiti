import React from 'react';
import styles from "./Ticket.module.css";

const Ticket = ({ ticket }) => {
    return (
        <div  className={styles.container}>
            <span className={styles.title}>Los datos registrados son los siguientes</span>
            <p>Nombre: {ticket.name}</p>
            <p>Correo Electrónico: {ticket.email}</p>
            <p>Número de Teléfono: {ticket.phoneNumber}</p>
            <p>Dirección: {ticket.address}</p>
            <p>Ciudad: {ticket.city}</p>
            <p>Estado o Provincia: {ticket.state}</p>
            <span className={styles.title}>¡Importante! Guarde el siguiente número:</span>
            <p className={styles.ticketNumber}>TICKET: {ticket.id}</p>
        </div>
    );
};

export default Ticket;
