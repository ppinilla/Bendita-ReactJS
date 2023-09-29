import React from 'react'
import './itemCount.css'
import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useCartContext } from '../context/CartContext';

const ItemCartCount = ({initial, stock}) => {

    const {addItem} = useCartContext();


    return (
        <div>
            <Button className='counter-button' colorScheme='blue' variant='outline' disabled={initial.quantity === 1} onClick={() => addItem(initial, - 1)}>-</Button>
            <span className='count'>{initial.quantity}</span>
            <Button className='counter-button' colorScheme='blue' variant='outline' disabled={initial.quantity === stock} onClick={() => addItem(initial, 1)}>+</Button>
        </div>
    )
}

export default ItemCartCount