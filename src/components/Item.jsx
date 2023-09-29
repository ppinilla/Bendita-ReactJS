import React from 'react'
import { Card, CardBody, Image, Stack, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../styles/itemLD.css'

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
                <Button variant='solid' color='rgb(157, 6, 94)' backgroundColor='rgba(157, 6, 94, 0.419)' height='50px' fontSize='1.22rem' className='more' >
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