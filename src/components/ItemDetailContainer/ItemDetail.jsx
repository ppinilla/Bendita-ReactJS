import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import './itemDetail.css'

const ItemDetail = ({item}) => {
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
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ItemDetail