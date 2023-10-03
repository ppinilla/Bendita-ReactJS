import React from 'react'
import '../styles/itemCart.css'
import { useCartContext } from '../context/CartContext'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import ItemCartCount from './ItemCartCount'


const ItemCart = ({ product }) => {

    const { removeItem } = useCartContext()

    return (
        <>
            <div className='cart' key={product.id}>
                <Box className='img' p='4'>
                    <img src={product.pictureUrl} alt={product.title} />
                </Box>
                <Spacer/>
                <Box className='title' p='4'>
                    <h2>{product.title}</h2>
                </Box>
                <Spacer/>
                <Box className='products' p='4'>
                    <h3>Cantidad: {product.quantity}</h3>
                    <h4>Precio: €{product.price}</h4>
                    <h4>Subtotal: €{product.quantity * product.price}</h4>
                </Box>
                <Spacer/>
                <Box p='4'>
                    <ItemCartCount initial={product} stock={10} />
                </Box>
                <Spacer/>
                <Box p='4'>
                    <Button height='50px' border='2px solid' className='delete' onClick={() => removeItem(product.id)}>Borrar</Button>
                </Box>
            </div>
        </>
        
        

    )
}

export default ItemCart