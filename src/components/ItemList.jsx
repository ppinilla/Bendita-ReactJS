import { Flex } from '@chakra-ui/react'
import Item from './Item'
import React from 'react'

const ItemList = ({prods}) => {
    return (
        <Flex justifyContent="center" alignItems="center" gap={10} p="4" flexWrap="wrap">
           {prods.map(prod => <Item key={prod.title} info={prod} />)} 
        </Flex>
        
    )
}

export default ItemList