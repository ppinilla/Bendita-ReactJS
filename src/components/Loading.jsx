import React from 'react'
import { Spinner, Box, AbsoluteCenter } from '@chakra-ui/react'

const Loading = () => {
    return (
        <div>
            <Box className='spinner' position='relative' h='200px'>
                <AbsoluteCenter  p='4' axis='both'>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </AbsoluteCenter>
            </Box>


        </div>
    )
}

export default Loading