import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

// Components
import img from '../../assets/contact/gorex-support-ic.png'

function LeftContactSection() {
    return (
        <>
            <Box sx={{ py: 5 }}>
                <img src={img} alt='gorex-support' />
                <Stack direction={'column'} gap={4} sx={{ py: 5, px: { xs: 2, sm: 0 } }}>
                    <Typography variant='h5' sx={{ color: '#898989', fontSize: { xs: '14px', sm: '18px' } }}>If you have any questions, comments, or concerns, please don’t hesitate to get in touch with us.</Typography>

                    <Box>
                        <Typography variant='h5' sx={{ color: 'black', fontSize: { xs: '14px', sm: '18px' }, fontWeight: 600, lineHeight: 1.8 }}>Go and Relax Co.</Typography>
                        <Typography variant='h5' sx={{ color: '#898989', fontSize: { xs: '14px', sm: '18px' } }}>PO Box 13317, Othman Bin Affan, Al Nada District, Riyadh, Saudi Arabia.</Typography>
                    </Box>

                    <Box>
                        <Typography variant='h5' sx={{ color: '#898989', fontSize: { xs: '14px', sm: '18px' }, lineHeight: 1.8 }}>info@gorex.ai</Typography>
                        <Typography variant='h5' sx={{ color: '#898989', fontSize: { xs: '14px', sm: '18px' } }}>920031334</Typography>
                    </Box>
                </Stack>
            </Box>

        </>
    )
}

export default LeftContactSection
