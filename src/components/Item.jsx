import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Divider, Spacer, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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
            <ButtonGroup spacing='2'>
            <Link to={`/item/${info.id}`}>
            <Button variant='solid' colorScheme='blue'>
              Ver más
            </Button>
            </Link>
            
          </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

export default Item