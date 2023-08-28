import './item.css'
import React from 'react'
import { Box, Card, CardBody, Image, Stack, Heading, Text, Divider, Spacer } from '@chakra-ui/react'

const Item = ({ info }) => {
  return (
    <>
      <Card maxW='sm'>
        <CardBody className='prod'>
          <Image
            src={info.pictureUrl}
            alt=""
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{info.title}</Heading>
            <Text>{info.description}</Text>
            <Text fontSize='2xl'>€{info.price}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      <Spacer />
    </>
  )
}

export default Item