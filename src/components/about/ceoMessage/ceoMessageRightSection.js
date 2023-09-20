import React from 'react'
import { Box } from '@mui/material'

import asim from '../../../assets/About/ceoMessage/asim-img.png'

function CeoMessageRightSection() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', py: 5, px: { xs: 0, md: 5 } }} >
                <Box sx={{
                    background: 'linear-gradient(186deg, rgba(255,139,0,0.2) 30%, rgba(255,255,255,0) 90%)',
                    width: { xs: '250px', sm: '300px', md: '350px', lg: '400px' },
                    height: { xs: '250px', sm: '300px', md: '350px', lg: '400px' },
                    borderRadius: '50%',
                    zIndex: 1,
                    overflow: 'hidden'
                }}>
                    <img src={asim} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>
        </>
    )
}

export default CeoMessageRightSection
