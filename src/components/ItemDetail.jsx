import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Flex, Box, Spacer } from '@chakra-ui/react';
import './itemDetail.css'

const ItemDetail = ({ item }) => {

  const onAdd = (quantity) => {
    //quantity en ItemDetail es el mismo valor que count en ItemCount
    console.log('Agregaste', quantity, 'unidades');
  }

  return (
    <Card maxW='sm' className='detail'>
      <CardBody>
        <Image
          src={item.pictureUrl}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{item.title}</Heading>
          <Text>{item.description}</Text>
          <Text fontSize='2xl'>€{item.price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex>
          <ButtonGroup spacing='2'>
            <Box p='4'>
              <Button variant='solid' colorScheme='blue'>
                Volver
              </Button>
            </Box>
            <Spacer />
            <Box p='4'>
              <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            </Box>
          </ButtonGroup>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default ItemDetail