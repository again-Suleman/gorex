import React from 'react'
import { Box, Stack } from '@mui/material'

import CeoMessageLeftSection from './ceoMessageLeftSection'
import CeoMessageRightSection from './ceoMessageRightSection'

function CeoMessage() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10, background: '#fafafa' }}>
                <Stack direction={{ xs: 'column', md: 'row' }}>
                    <Box flex={2}>
                        <CeoMessageLeftSection />
                    </Box>
                    <Box flex={1}>
                        <CeoMessageRightSection />
                    </Box>
                </Stack>

            </Box>

        </>
    )
}

export default CeoMessage
