import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'

// Components
import AppStore from '../../reusable/applicationStore'
import OrangeButton from '../../buttons/orangeButton'
import TransparentButton from '../../buttons/transparentButton'

function LeftHeader() {
    return (
        <>
            <Stack flex={1.3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>

                <Box sx={{ px: 2 }}>
                    <Stack sx={{ color: 'white', my: 7 }}>
                        <Typography variant='h1' sx={{ fontSize: { xs: '36px', md: '48px' }, fontWeight: 600, letterSpacing: 1 }} >The Ultimate Automotive Services Marketplace.</Typography>
                        <Typography variant='h4' sx={{ fontSize: { xs: '20px', md: '22px' }, pt: 3 }}>Step into the modern Automotive Ecosystem</Typography>
                    </Stack>

                    <AppStore />
                </Box>

                <Box sx={{ my: 10 }}>
                    <Typography variant='h4' sx={{ maxWidth: '70%', fontSize: { xs: '20px', sm: '24px' }, fontWeight: '600', mx: 2 }}>Expand your reach and become a Gorex partner, Join today!</Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{ my: 2 }}>
                        <Link to="/web/login">
                            <OrangeButton input="Register now" />
                        </Link>

                        <Link to="/contactus">
                            <TransparentButton input="Contact us" />
                        </Link>
                    </Stack>
                </Box>
            </Stack>

        </>
    )
}

export default LeftHeader
