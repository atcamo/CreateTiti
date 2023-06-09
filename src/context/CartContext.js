import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children}) =>{
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!inInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else { 
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const inInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    
    return (
            <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
                { children }
            </CartContext.Provider>
    )
}