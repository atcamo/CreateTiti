import styles from './ItemDetailContainer.module.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../services/firebase/getProduct'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [product, setProduct]= useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const getData = async () => {
            const productDataAdapted = await getProductById(itemId);
            setProduct(productDataAdapted);
        };
            getData();
        }, [itemId]);


    return (
        <div className={styles.container}>
            <ItemDetail{...product}/>
        </div>
    )
    }

export default ItemDetailContainer