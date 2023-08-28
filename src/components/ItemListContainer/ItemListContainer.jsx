import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {

  const onAdd = (quantity) => { 
    //quantity en ItemListContainer es el mismo valor que count en ItemCount
    console.log('Agregaste', quantity, 'unidades');
  }

  return (
    <>
      <Center>
        <h1>{greeting}</h1>
      </Center>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer