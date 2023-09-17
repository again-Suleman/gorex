import { Box, Stack, Typography } from '@mui/material'
import React from 'react'


function LeftBottom() {
    return (
        <div>
            <Box>
                <Stack direction={'column'}>
                    <Typography variant='h2' sx={{ fontSize: { xs: '20px', md: '28px' }, fontWeight: 600 }}> Rev up your automotive experience with Gorex!</Typography>
                    <Typography variant='h3'></Typography>
                </Stack>
            </Box>
        </div>
    )
}

export default LeftBottom
