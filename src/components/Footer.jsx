import React from 'react'
import { Flex, Box, Image, Spacer, AspectRatio } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../styles/navBar.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Flex>
                <Box p='4' boxSize='100px'>
                    <Link to={'/'}>
                        <Image className='image' src="src/img/IMG_2704.PNG" alt='Logo Bendita' />
                    </Link>
                </Box>
                <Spacer />
                <Box p='4' className='span'>
                    <span className='span-title'>
                        Sede
                    </span> <br />
                    <span>
                        Cno Centenario N° 80 entre 474 y 476 <br />
                        CePa planta alta, B1902 City Bell, Argentina
                    </span> <br />

                </Box>
                <Spacer />
                <Box p='4' className='span'>
                    <span className='span-title'>Medicina Estetica</span><br />
                    <span>Telefono: <br /> +54 221 306-2453</span>
                </Box>

            </Flex>
            <AspectRatio width="600" height="450" allowfullscreen="" loading="lazy" ratio={16 / 5}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13093.256029755794!2d-58.0562345401173!3d-34.87346046573711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2df6078a5d14d%3A0x36550972fd4e9d6c!2sBendita%20Est%C3%A9tica!5e0!3m2!1ses!2sit!4v1696098224765!5m2!1ses!2sit"></iframe>
            </AspectRatio>
        </div>
    )
}

export default Footer