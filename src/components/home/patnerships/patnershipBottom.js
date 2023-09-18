import React from 'react'

// Buttons
import OrangeButton from '../../buttons/orangeButton'
import TransparentButton from '../../buttons/transparentButton'
import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function PatnershipBottom() {
    return (
        <>
            <Stack direction={'column'} gap={5} sx={{alignItems: 'center'}}>
                <Typography variant='h3' sx={{ fontWeight: 600, width: '40%',textAlign:'center' }}>Expand your reach and become a Gorex partner, Join today! </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{ my: 2 }}>
                    <Link to="/web/login">
                        <OrangeButton input="Register now" />
                    </Link>

                    <Link to="/contactus">
                        <TransparentButton input="Contact us" />
                    </Link>
                </Stack>
            </Stack>
        </>
    )
}

export default PatnershipBottom
