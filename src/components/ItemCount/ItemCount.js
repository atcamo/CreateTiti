import styles from "./ItemCount.module.css";
import { useState } from 'react';



const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }
        
    const numberClasses = quantity === stock || quantity === 1 ? `${styles.number} ${styles.red}` : styles.number;

    return (
        <div className={styles.counter}>
            <div className={styles.controls}>
                <button className={styles.button} onClick={decrement}>-</button>   
                <h4 className={numberClasses}>{quantity}</h4>
                <button className={styles.button} onClick={increment}>+</button>      
            </div>
            <div>
            <button className={styles.button} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount