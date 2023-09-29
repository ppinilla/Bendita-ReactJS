import React from 'react'
import '../styles/itemCount.css'
import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useCartContext } from '../context/CartContext';

const ItemCartCount = ({initial, stock}) => {

    const {addItem} = useCartContext();


    return (
        <div>
            <Button height='50px' width='50px' border='2px solid rgb(157, 6, 94)' color='rgb(157, 6, 94)' colorScheme='blue' variant='outline' disabled={initial.quantity === 1} onClick={() => addItem(initial, - 1)}>-</Button>
            <span className='count'>{initial.quantity}</span>
            <Button height='50px' width='50px' border='2px solid rgb(157, 6, 94)' color='rgb(157, 6, 94)' colorScheme='blue' variant='outline' disabled={initial.quantity === stock} onClick={() => addItem(initial, 1)}>+</Button>
        </div>
    )
}

export default ItemCartCount