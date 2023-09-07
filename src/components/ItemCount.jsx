import './itemCount.css'
import React from 'react'
import { Button, Divider } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const Decrease = () => {
        setCount(count - 1)
    }
    const Increase = () => {
        setCount(count + 1)
    }

    //El useEffect en este caso se usa para que cada vez que cambie el valor initial, este se resetee y no haya que actualizarlo
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter'>
            <Button colorScheme='blue' variant='outline' disabled={count <= 1} onClick={Decrease}>-</Button>
            <span className='count'>{count}</span>
            <Button colorScheme='blue' variant='outline' disabled={count >= stock} onClick={Increase}>+</Button>
            <div className='button'>
                <Button colorScheme='blue' variant='outline' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount