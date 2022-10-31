import React from "react";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart";


const Cart = () => {
const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Realizar compras</Link>
            </>
        );
    }

    return(
        <>
            {
                cart.map((producto) => (<ItemCart key={producto.id} producto={producto} />))
            }
    </>
    );
}

export default Cart;