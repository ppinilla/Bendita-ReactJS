import React from 'react'
import './itemCart.css'
import { useCartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Box } from '@chakra-ui/react'
import ItemCartCount from './ItemCartCount'

const ItemCart = ({ product }) => {

    const { removeItem, totalProducts } = useCartContext()

    return (
        /* <div className='itemCart' key={product.id}>
            <div className='cart card'>
                <div className='title'>Tu carrito</div>
                <div className='products'>
                    <div className='product'>
                        <img src={product.pictureUrl} alt={product.title} />
                        <div>
                            <span>{product.title}</span>
                        </div>
                        <label className='small'>€{product.price}</label>
                    </div>

                </div>
            </div>

        </div> */
        <div className='itemCart' key={product.id}>
            <img src={product.pictureUrl} alt={product.title} />
            <div>
                <h3>Titulo: {product.title}</h3>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: £{product.price}</p>
                <p>Subtotal: €{product.quantity * product.price}</p>
                <Box p='4'>
                    <ItemCartCount initial={product} stock={10}/>
                </Box>
                <button onClick={() => removeItem(product.id)}>Borrar</button>
            </div>
        </div>

    )
}

export default ItemCart