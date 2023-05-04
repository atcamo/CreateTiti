import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [cartQuantity, setCartQuantity] = useState(0);

    const handleAdd = (quantity) => {
        setCartQuantity(quantity);
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
                        <a href="../CartWidget/CartWitget.js" className={styles.button}>Terminar Compra</a>
                    ) : ( 
                        <ItemCount initial={1} stock={stock} onAdd={handleAdd}/> 
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
