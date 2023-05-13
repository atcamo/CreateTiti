import { createContext, useEffect, useState } from "react";
import {getProduct} from "../services/firebase/getProduct"

export const ProductContext = createContext();

export const ProductProvider = ({ children}) =>{
    const [product, setProduct] = useState([]);

    useEffect (() => {
        getProduct()
        .then((product) => {
            setProduct(product);
        })

        .catch((error) => {
            console.error(error);
        });
},[])
    
    return (
            <ProductContext.Provider value={{product}}>
                { children }
            </ProductContext.Provider>
    )
}