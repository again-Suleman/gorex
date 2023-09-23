import React from 'react'
import { Box, Stack } from '@mui/material'

// Components
import WhiteTitle from '../reusable/WhiteTitle'
import LeftContactSection from './leftContactSection'
import RightContactSection from './rightContactSection'

function Contact() {
    return (
        <>
            <WhiteTitle title='WE’RE HERE TO HELP!' heading='Gorex Support.' fullWidth={true} />

            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 3, pb: 5 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
                    <Box flex={1} >
                        <LeftContactSection />
                    </Box>
                    <Box flex={1} >
                        <RightContactSection />
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Contact
