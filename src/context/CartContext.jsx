import React from 'react'
import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));
    const addItem = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, quantity: newQuantity });
        setCart(newCart)
    }
    console.log(cart);


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeItem,
            addItem
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider