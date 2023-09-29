import './itemCount.css'
import React from 'react'
import { Button, Divider, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {

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

    return (
        <div className='counter'>
            <Box>
                <Button className='counter-button' colorScheme='blue' variant='outline' onClick={Decrease}>-</Button>
                <span className='count'>{count}</span>
                <Button className='counter-button' colorScheme='blue' variant='outline' onClick={Increase}>+</Button>
            </Box>
            <Box>
                <div className='button'>
                    <Button colorScheme='blue' variant='outline' disabled={stock <= 10} onClick={() => onAdd(count)}>Agregar al carrito</Button>
                </div>
            </Box>

        </div>
    )
}

export default ItemCount