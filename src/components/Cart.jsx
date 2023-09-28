import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import ItemCart from './ItemCart';

const Cart = () => {
  const { cart, totalPrice, clearCart, removeItem } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        
        <Link to='/'><Button colorScheme='blue'>Ir a comprar</Button></Link>
      </>
    );
  }

  return (
    <>
    {cart.map((product) => <ItemCart product={product} key={product.id}/>)}
    <Button onClick={clearCart}>Limpiar carrito</Button>
    <p>Total: €{totalPrice()}</p>
    <Link to='/form'><Button>Comprar ahora</Button></Link>
    </>
  )
}

export default Cart