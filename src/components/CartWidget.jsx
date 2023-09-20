import { SunIcon } from '@chakra-ui/icons'
import { Divider, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { useCartContext } from '../context/CartContext'

const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <div>
      <Flex>
        <Box>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </Box>
        <Divider />
        <Box>
          <span>{totalProducts() || ''}</span>
        </Box>

      </Flex>
    </div>
  )
}

export default CartWidget