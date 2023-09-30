import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import '../styles/navBar.css'

const NavBar = () => {
    return (
        <div>
            <Flex className='navBar'>
                <Box p='4' boxSize='100px'>
                    <Link to={'/'}>
                            <Image src="src/img/IMG_2704.PNG" alt='Logo Bendita' />
                    </Link>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu >
                        <MenuButton className='tratamientos'>
                            Tratamientos
                        </MenuButton>
                        <MenuList>
                            <Link to={'/category/facial'}>
                                <MenuItem>Facial</MenuItem>
                            </Link>
                            <Link to={'/category/corporal'}>
                                <MenuItem>Corporal</MenuItem>
                            </Link>
                            <Link to={'/category/capilar'}>
                                <MenuItem>Capilar</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Link to={'/cart'}>
                        <CartWidget />
                    </Link>

                </Box>

            </Flex>
        </div>
    )
}

export default NavBar