import { Box, Stack } from '@mui/material'
import React from 'react'

//components
import LeftPatnershipSection from './leftPatnershipSection'
import RightPatnershipSection from './rightPatnershipSection'
import ContactBottom from '../../reusable/contactBottom'

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

        </>
    )
}

export default Patnerships
