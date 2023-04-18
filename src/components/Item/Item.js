import { Link } from "react-router-dom"
import styles from "./Item.module.css"


const Item = ({id, name, category, img, price, stock}) => {

    return (
        <article className={styles.container} >
            <header>
                <h2 className={styles.header}>{name}</h2>
            </header>
            <picture className={styles.marco}>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p >${price}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`} >Ver detalle</Link>
            </footer>
        </article>
    )
    }

export default Item