import React from 'react'
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <Center>
      <h1>{greeting}</h1>
    </Center>
    
  )
}

export default ItemListContainer