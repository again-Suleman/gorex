import React from 'react'
import { Stack, Typography } from '@mui/material'

//components
import Title from '../../reusable/Title'
import OrangeButton from '../../buttons/orangeButton'

function LeftPatnershipSection() {
    return (
        <>
            <Stack direction={'column'} >
                <Title title='PARTNERSHIPS' heading='Join forces for automotive excellence.' />
                <Stack direction={'column'} spacing={2} sx={{ my: 5, px: { xs: 2, sm: 0 } }}>
                    <Typography variant='h5' sx={{ color: '#8b8b8b', fontSize: { xs: '14px', sm: '18px' } }} >At Gorex, we believe in building long-term partnerships with our merchants and customers.</Typography>
                    <Typography variant='h5' sx={{ color: '#8b8b8b', fontSize: { xs: '14px', sm: '18px' } }} >Our goal is to work together to achieve shared success and create long-term value. We are committed to empowering our partners to succeed through strategic guidance and access to our network of resources.</Typography>
                    <Typography variant='h5' sx={{ color: '#8b8b8b', fontSize: { xs: '14px', sm: '18px' } }} >By fostering strong partnerships, we ensure that our customers receive the best automotive services available. We’re committed to building lasting relationships that deliver the best possible outcomes for everyone.</Typography>
                </Stack>
                <OrangeButton input='Learn more' />
            </Stack>
        </>
    )
}

export default LeftPatnershipSection
