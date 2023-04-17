import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id, name, img, category, description, price,stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => ("cantidad agregada", quantity)}/> 
            </footer>
        </article>
    )
    }

export default ItemDetail