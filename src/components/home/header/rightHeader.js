import { Box } from '@mui/material'
import React from 'react'

// Images
import headerImg from '../../../assets/header/main-header-mockup.png'

function RightHeader() {
    return (
        <>
            <Box
                flex={1}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',

                    '& img': {
                        transition: 'transform 0.3s ease-in-out',
                        transform: 'scale(0.95)',
                        width: { xs: '290px', sm: '400px', md: 'auto' }
                    },

                    '&:hover img': {
                        transform: 'scale(0.95) translateX(15px)',
                        transition: '0.3s all ease-in-out',
                    },
                }}
            >
                <img src={headerImg} alt="Header Image" />
            </Box>

        </>
    )
}

export default RightHeader
