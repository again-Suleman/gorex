import React from 'react'

// Buttons
import OrangeButton from '../buttons/orangeButton'
import TransparentButton from '../buttons/transparentButton'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function ContactBottom() {
    return (
        <>
            <Stack direction={'column'} gap={5} sx={{alignItems: 'center'}}>
                <Typography variant='h3' sx={{ fontWeight: 600, width: {xs: '90%', sm: '80%', md: '50%'},textAlign:'center' }}>Expand your reach and become a Gorex partner, Join today! </Typography>
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

export default ContactBottom
