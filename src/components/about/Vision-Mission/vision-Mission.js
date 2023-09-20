import React from 'react'
import { useTheme } from '@emotion/react'
import { Box, Stack } from '@mui/material'

// Components
import Vision from './vision'
import Mision from './mission'


function VisionMission() {
    const theme = useTheme()
    return (
        <>
            <Box >
                <Stack direction={{ xs: 'column', md: 'row' }}>
                    <Box flex={1}>
                        <Vision />
                    </Box>
                    <Box flex={1} sx={{ bgcolor: `${theme.palette.orangeAccent.main}` }}>
                        <Mision />
                    </Box>
                </Stack>
            </Box>

        </>
    )
}

export default VisionMission
