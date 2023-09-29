import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import ItemCart from './ItemCart';
import './itemCart.css'

const Cart = () => {
  const { cart, totalPrice, clearCart, removeItem } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className='cart-empty'>
        <p className='empty'>No hay productos en tu carrito!</p>

        <Link className='toItems' to='/'><Button colorScheme='blue'>Ver productos</Button></Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => <ItemCart product={product} key={product.id} />)}
      <div className='buttonClear'>
        <Button className='clearCart' onClick={clearCart}>Limpiar carrito</Button>
      </div>
      <div className='toForm'>
        <h3 className='total'>Total: €{totalPrice()}</h3>
        <Link to='/form'><Button className='buy'>Comprar ahora</Button></Link>
      </div>

    </>
  )
}

export default Cart