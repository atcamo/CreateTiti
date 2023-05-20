import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import emptyCartImage from "./images/empty-cart.png";

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);

    // Calcula el valor total del carrito
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (totalQuantity === 0) {
        return (
        <div className={styles.cart}>
            <h1>No tiene items en el carro</h1>
            <Link to="/">Productos</Link>
        </div>
        );
    }

    return (
        <div className={styles.cart}>
        {cart.map((p) => (
            <CartItem key={p.id} {...p} />
        ))}
        <h3>Total: ${total}</h3>
        {total > 0 ? (
            <>
            <button onClick={() => clearCart()}>Limpiar carro</button>
            <Link to="/checkout">Checkout</Link>
            </>
        ) : (<>
            <img src={emptyCartImage} alt="Carro vacío" />  
            <h1>Carro Vacio</h1>
            </>
        )}
        </div>
    );
};

export default Cart;
