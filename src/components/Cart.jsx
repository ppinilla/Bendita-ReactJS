import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import ItemCart from './ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

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
    {cart.map(product => <ItemCart key={product.id} product={product}/>)}
    <p>total: ${totalPrice()}</p>
    </>
  )
}

export default Cart