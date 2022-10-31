import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext(CartContext);

const CartProvider = ({ Children }) => {

const [cart, setCart] = useState([]);

console.log('carrito', cart);

const addProduct = (item, quantity) => {
    if (isInCart(item.id)){
        setCart(cart.map(producto => {
            return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity} :producto
        }));
    } else {
        setCart ([...cart, {...item, quantity}]);
    }
}

const clearCart = () => setCart([]);

const isInCart = () => setCart(cart.filter(producto => producto.id !== id)) ? true : false;

const removeProduct = (id) => setCart(cart.filter(producto => producto.id !== id));
    return(
        <CartContext.Provider value={{
            addProduct,
            clearCart,
            isInCart,
            removeProduct
        }}>
            {Children}
        </CartContext.Provider>
    )
}

export default CartProvider;