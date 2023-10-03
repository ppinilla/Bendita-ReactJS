import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import ItemCart from './ItemCart';
import '../styles/itemCart.css'

const Cart = () => {
  const { cart, totalPrice, clearCart} = useCartContext();

  if (cart.length === 0) {
    return (
      <div className='cart-empty'>
        <p className='empty'>No hay productos en tu carrito!</p>

        <Link className='toItems' to='/trat'><Button height='50px' color='rgb(157, 6, 94)' backgroundColor='rgba(157, 6, 94, 0.419)' border='2px solid rgb(157, 6, 94)' margin='20px'>Ver productos</Button></Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => <ItemCart product={product} key={product.id} />)}
      <div className='buttonClear'>
        <Button height='50px' className='clearCart' onClick={clearCart}>Limpiar carrito</Button>
        <Link to='/trat'><Button height='50px' color='rgb(157, 6, 94)' border='2px solid rgb(157, 6, 94)' margin='20px' textTransform='uppercase'>Seguir comprando</Button></Link>
      </div>
      <div className='toForm'>
        <h3 className='total'>Total: €{totalPrice()}</h3>
        <Link to='/form'><Button color='rgb(157, 6, 94)' backgroundColor='rgba(157, 6, 94, 0.419)' height='50px' fontSize='1.22rem' border='2px solid rgb(157, 6, 94)' className='buy'>Comprar ahora</Button></Link>
      </div>

    </>
  )
}

export default Cart