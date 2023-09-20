import React from 'react'
import './itemCart.css'
import { useCartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Box } from '@chakra-ui/react' 
import ItemCartCount from './ItemCartCount'

const ItemCart = ({ product }) => {

    /* const {addItem} = useCartContext();

    const onAdd = (quantity) => {
        //quantity en ItemDetail es el mismo valor que count en ItemCount
        console.log('Agregaste', quantity, 'unidades');
        addItem(product, quantity);
      } */

    const { removeItem, totalProducts } = useCartContext()
    return (
        <div className='itemCart'>
            <img src={product.pictureUrl} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeItem(product.id)}>Eliminar</button>
                <Box p='4'>
                    <ItemCartCount initial={1} stock={10} /* onAdd={onAdd} */ />
                </Box>
                
                
            </div>
        </div>
    )
}

export default ItemCart