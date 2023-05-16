import styles from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProductsByCategory } from "../../services/firebase/getProduct";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    console.log(products)

    useEffect(() => {
    
        const getData = async () => {
            const productsDataAdapted = await getProductsByCategory(categoryId);
            setProducts(productsDataAdapted);
            };
        
            getData();
        }, [categoryId]);

    return (
        <div className={styles.container}>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer;