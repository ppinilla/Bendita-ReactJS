import React from 'react'
import './itemCount.css'
import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const ItemCartCount = ({initial}) => {

    const [count, setCount] = useState(parseInt(initial));

    const Decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const Increase = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter'>
            <Button colorScheme='blue' variant='outline' /* disabled={count <= 1} */ onClick={Decrease}>-</Button>
            <span className='count'>{count}</span>
            <Button colorScheme='blue' variant='outline' /* disabled={count >= stock} */ onClick={Increase}>+</Button>
        </div>
    )
}

export default ItemCartCount