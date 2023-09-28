import React from 'react'
import './itemCount.css'
import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useCartContext } from '../context/CartContext';

const ItemCartCount = ({initial, stock}) => {

    const {addItem} = useCartContext();

    /* const [count, setCount] = useState(parseInt(initial)); */

    const Decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    /* const Increase = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    } */
    
   /*  useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]) */

    return (
        <div className='counter'>
            <Button className='counter-button' colorScheme='blue' variant='outline' /* disabled={count <= 1} */ onClick={Decrease}>-</Button>
            <span className='count'>{initial.quantity}</span>
            <Button className='counter-button' colorScheme='blue' variant='outline' onClick={() => addItem(initial)}>+</Button>
            {/* <Button colorScheme='blue' variant='outline' disabled={stock <= 10} onClick={() => addItem(initial)}>Agregar</Button> */}
        </div>
    )
}

export default ItemCartCount