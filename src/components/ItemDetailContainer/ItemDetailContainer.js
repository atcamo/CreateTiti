import styles from './ItemDetailContainer.module.css'
import { useState, useEffect } from 'react'
import { getProduct } from '../../services/firebase/getProduct'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct]= useState(null)

    const { itemId } = useParams()

    useEffect (() => {
        getProduct()
            .then(response => {
                const foundProduct = response.find(product => product.id === itemId);
                setProduct(foundProduct);
            })
            .catch(error=> {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className={styles.container}>
            <ItemDetail{...product}/>
        </div>
    )
}

export default ItemDetailContainer;
