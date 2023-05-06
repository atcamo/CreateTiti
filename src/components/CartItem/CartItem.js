import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartItem.module.css";

const CartItem = ({id, name, price, quantity}) => {
    const {removeItem} = useContext(CartContext)

    return (
        <div className={styles.cartItem}>

            <div className={styles.details}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.price}>${price} x {quantity}</p>
            </div>
            <button className={styles.removeButton} onClick={() => removeItem(id)}>x</button>
        </div>
    )
}

export default CartItem;