import styles from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../services/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    console.log(products)

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            
            .catch(error => {
                console.error(error)
            })
            
    }, [categoryId]
    )

    return (
        <div className={styles.container}>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer;