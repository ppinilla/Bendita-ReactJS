import '../styles/itemCount.css'
import React from 'react'
import { Button, Box } from '@chakra-ui/react'
import { useState } from 'react'

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
                <Button height='50px' width='50px' border='2px solid rgb(157, 6, 94)' color='rgb(157, 6, 94)' variant='outline' onClick={Decrease}>-</Button>
                <span className='count'>{count}</span>
                <Button height='50px' width='50px' border='2px solid rgb(157, 6, 94)' color='rgb(157, 6, 94)' variant='outline' onClick={Increase}>+</Button>
            </Box>
            <Box>
                <div>
                    <Button height='50px' border='2px solid rgb(157, 6, 94)' color='rgb(157, 6, 94)'  className='button' variant='outline' disabled={stock <= 10} onClick={() => onAdd(count)}>Agregar al carrito</Button>
                </div>
            </Box>

        </div>
    )
}

export default ItemCount