import { Link } from "react-router-dom"


const Item = ({id, name, category, img, price, stock}) => {

    return (
        <article >
            <header>
                <h2>{name}</h2>
            </header>
            <picture >
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