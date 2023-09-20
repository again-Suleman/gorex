import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

// Components
import Title from '../../reusable/Title'

function CeoMessageLeftSection() {
    return (
        <>
            <Box>
                <Box>
                    <Title title={"CEO'S Message"} heading={"Driving Innovation in the Automotive Industry."} />
                </Box>
                <Stack direction={'column'} gap={4} sx={{ py: 5, px: { xs: 2, sm: 0 } }}>
                    <Typography variant='h5' sx={{ color: '#8b8b8b', fontSize: { xs: '14px', sm: '18px' } }}>Gorex is a leading technology-based company in the automotive and transportation industry. We strive to provide transparent and efficient services to our customers by using innovative technology and data insights.</Typography>
                    <Typography variant='h5' sx={{ color: '#8b8b8b', fontSize: { xs: '14px', sm: '18px' } }}>As CEO, I am proud to lead a team that is dedicated to meeting the ever-evolving needs of the industry, providing valuable services that enhance the quality of life for our clients. We continuously strive to be a trusted and reliable partner for our customers.</Typography>
                    <Box>
                        <Typography variant='h5' sx={{ color: '#898989', fontSize: { xs: '14px', sm: '18px' }, fontWeight: 600 }}>Asim Jamil</Typography>
                        <Typography variant='h5' sx={{ color: '#8b8b8b', fontSize: { xs: '14px', sm: '18px' } }}>CEO & Founder</Typography>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default CeoMessageLeftSection
