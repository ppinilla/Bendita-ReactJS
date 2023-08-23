import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
} from '@chakra-ui/react'
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
                            Categories
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Category A</MenuItem>
                            <MenuItem>Category B</MenuItem>
                            <MenuItem>Category C</MenuItem>
                            <MenuItem>Category D</MenuItem>
                            <MenuItem>Category E</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <CartWidget/>
                </Box>
                
            </Flex>
        </div>
    )
}

export default NavBar