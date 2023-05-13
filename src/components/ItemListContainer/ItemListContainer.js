import styles from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProduct } from "../../services/firebase/getProduct"
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    console.log(products)

    useEffect(() => {
        getProduct()
            .then(response => {
                if (categoryId) {
                    const filteredProducts = response.filter(product => product.categoryId === categoryId);
                    setProducts(filteredProducts);
                } else {
                    setProducts(response);
                }
            })
            .catch(error => {
                console.error(error)
            })
            
    }, [categoryId])

    return (
        <div className={styles.container}>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;
