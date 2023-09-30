import React from 'react'
import { Center, Container, Box, Card, CardBody, Text, CardFooter, Button, Heading, Divider } from '@chakra-ui/react'
import '../styles/itemLD.css'
import { Link } from 'react-router-dom'

const Home = ({ greeting }) => {
    return (
        <div>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                bgImage="url(src/img/pexels-arina-krasnikova-6663369.jpg)"
                bgPosition='center'
                bgRepeat='no-repeat'
                backgroundSize='cover'
                mb={2}
            >
                <Container maxW='md'>
                    <Center className='greeting'>
                        <h1>¡{greeting}!</h1>
                    </Center>
                </Container>
            </Box>
            <Card align='center'>
                <CardBody>
                    <Heading fontSize='lg'>TRATAMIENTOS FACIALES, CORPORALES Y CAPILARES
                    </Heading><br />
                    <Text fontSize='lg'>
                        En nuestra estética de City Bell puede someterse a numerosos tratamientos faciales, corporales y capilares que combinan los beneficios de la biocosmesis con la competencia y la profesionalidad de un personal altamente cualificado.
                    </Text><br />
                    <Text fontSize='lg'>
                        Cada tratamiento que realizamos se personaliza según las necesidades específicas de la piel de nuestros clientes, para garantizar resultados óptimos. Además, nuestro equipo de profesionales se mantiene en constante actualización sobre las técnicas y los productos más innovadores del sector, de modo tal de proponer siempre y solo tratamientos a la vanguardia.
                    </Text> <br />
                    <Text fontSize='lg'>
                        Para conocer todas las prestaciones que ofrecemos no dude en visitar la tienda.
                    </Text>
                </CardBody>
                <CardFooter>
                    <Link to={'/trat'}>
                        <Button color='rgb(157, 6, 94)' backgroundColor='rgba(157, 6, 94, 0.419)' border='2px solid rgb(157, 6, 94)' height='50px' fontSize='1.22rem'>Quiero ver mas</Button>
                    </Link>
                </CardFooter>
            </Card>
            <Divider/>
            <Card align='center'>
                <CardBody>
                    <Text fontSize='lg'>Bendita le ofrece la oportunidad de dedicarse a sí mismo en 360 grados, tanto a nivel físico como mental. Nuestros profesionales le ayudan a cuidar lo mejor del órgano más grande del cuerpo: su piel, que requiere atención constante para poder mantenerse joven y radiante.
                    </Text><br />
                    <Text fontSize='lg'>
                        Numerosos factores, como el tabaquismo, el smog, el estrés y sobre todo los ritmos frenéticos típicos del estilo de vida actual, pueden acelerar los procesos de envejecimiento, haciendo vanos los esfuerzos de quienes cuidan su piel solo en casa.
                    </Text><br />
                    <Text fontSize='lg'>
                        Aquí es donde entra en juego nuestro centro de City Bell, que gracias al uso de técnicas y equipos de vanguardia puede mejorar la textura y el aspecto de la piel, así como ralentizar notablemente el envejecimiento cutáneo. Póngase en contacto con nosotros o visítenos directamente para descubrir todos los tratamientos de medicina y cirugía estética que tenemos para usted.
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button color='rgb(157, 6, 94)' backgroundColor='rgba(157, 6, 94, 0.419)' border='2px solid rgb(157, 6, 94)' height='50px' fontSize='1.22rem'>¿Dónde estamos?</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Home