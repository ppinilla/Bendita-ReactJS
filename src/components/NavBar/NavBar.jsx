import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Divider} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='4'>
                    <h3>Bendita</h3>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Tratamientos
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Facial</MenuItem>
                            <MenuItem>Corporal</MenuItem>
                            <MenuItem>Capilar</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>

            </Flex>
            <Divider/>
        </div>
    )
}

export default NavBar