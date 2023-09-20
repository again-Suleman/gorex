import React from 'react'
import { Stack, Typography } from '@mui/material'

function Sides({ white, typo1, typo2, typo3 }) {
    const color = white ? 'white' : '#898989'

    return (
        <>
            <Stack direction={'column'} gap={4} sx={{ py: 5, px: { xs: 2, sm: 0 } }}>
                <Typography variant='h5' sx={{ color: `${color}`, fontSize: { xs: '14px', sm: '18px' } }}>{typo1}</Typography>
                <Typography variant='h5' sx={{ color: `${color}`, fontSize: { xs: '14px', sm: '18px' } }}>{typo2}</Typography>
                <Typography variant='h5' sx={{ color: `${color}`, fontSize: { xs: '14px', sm: '18px' } }}>{typo3}</Typography>
            </Stack>
        </>
    )
}

export default Sides
