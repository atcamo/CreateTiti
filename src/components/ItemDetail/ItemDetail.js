import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [cartQuantity, setCartQuantity] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleAdd = (quantity) => {
        setCartQuantity(quantity);

        const item ={
            id, name, price
        }

        addItem(item, quantity)
    }


    return (
        <article className={styles.cardItem}>
            <header className={styles.header}>
                <h2 className={styles.itemHeader}>
                    {name}
                </h2>   
                <picture>
                    <img src={img} alt={name} className={styles.itemImg}/>
                </picture>
                <section>
                    <p className={styles.info}>
                        Categoria: {category}
                    </p>
                    <p className={styles.info}>
                        Descripción: {description}
                    </p>
                    <p className={styles.info}>
                        Precio: ${price}
                    </p>
                </section>
            </header>
            <footer className={styles.itemFooter}>
                {
                    cartQuantity > 0 ? (
                        <Link to="/cart" className={styles.button}>Terminar Compra</Link>
                    ) : ( 
                        <ItemCount initial={1} stock={stock} onAdd={handleAdd}/> 
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
