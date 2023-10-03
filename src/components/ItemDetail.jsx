import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, Grid, GridItem, Center } from '@chakra-ui/react';
import '../styles/itemLD.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {

  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    console.log('Agregaste', quantity, 'unidades');
    setGoToCart(true);
    addItem(item, quantity);
  }

  return (
    <Card maxW='xl' className='detail'>
      <CardBody>
        <Center>
          <Image 
          src={item.pictureUrl}
          borderRadius='lg'
        />
        </Center>
        
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{item.title}</Heading>
          <Text>{item.description}</Text>
          <Text fontSize='2xl'>€{item.price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Grid templateColumns='repeat(5,1fr)' gap={4}>
          <GridItem colSpan={1} >
            <Link to={'/trat'}>
              <Button className='more' variant='solid' color='rgb(157, 6, 94)' backgroundColor='rgba(157, 6, 94, 0.419)' height='50px' fontSize='1.22rem'>
                Volver
              </Button>
            </Link>
          </GridItem>
          <GridItem colStart={5} colEnd={6}>
            {goToCart ? <Button height='50px' border='2px solid rgb(157, 6, 94)' color='rgb(157, 6, 94)' variant='outline'><Link to={'/cart'}>Finalizar compra</Link></Button> : <ItemCount initial={1} stock={10} onAdd={onAdd} />}
          </GridItem>
        </Grid>
      </CardFooter>

    </Card>
  )
}

export default ItemDetail