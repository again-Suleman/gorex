import { Box, Stack } from '@mui/material'
import React from 'react'

//components
import LeftPatnershipSection from './leftPatnershipSection'
import RightPatnershipSection from './rightPatnershipSection'
import PatnershipBottom from './patnershipBottom'

function Patnerships() {
    return (
        <>
            <Stack direction={{ xs: 'column', md: 'row' }} sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, overflow: 'hidden' }} >
                <Box flex={1.1} sx={{mb:10}}>
                    <LeftPatnershipSection />
                </Box>
                <Box flex={0.9}>
                    <RightPatnershipSection />
                </Box>
            </Stack>

            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 15,  overflow: 'hidden'  }} >
                <PatnershipBottom />
            </Box>

        </>
    )
}

export default Patnerships
