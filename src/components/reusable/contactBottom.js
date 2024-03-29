import React, { useEffect } from 'react'

// Buttons
import OrangeButton from '../buttons/orangeButton'
import TransparentButton from '../buttons/transparentButton'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactBottom({ bgcolor = 'white' }) {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "400", once: true });
    }, [])

    return (
        <>
            <Stack direction={'column'} gap={5} sx={{ alignItems: 'center', pt: 10, pb: 10, bgcolor: bgcolor }}>
                <Typography variant='h3' sx={{ fontWeight: 600, width: { xs: '90%', sm: '80%', md: '45%' }, textAlign: 'center' }}>Expand your reach and become a Gorex partner, Join today! </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{ my: 1 }}>
                    <a href="https://partner.gorex.ai/web/login" target='_blank'>
                        <OrangeButton input="Register now" />
                    </a>

                    <Link to="/contactus">
                        <TransparentButton input="Contact us" />
                    </Link>
                </Stack>
            </Stack>
        </>
    )
}

export default ContactBottom
