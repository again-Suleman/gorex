import React, { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

// Components
import Title from '../../../reusable/Title'
import CustomGrid from '../../../reusable/customGrid/CustomGrid'

// Data
import { Benefit3Data } from './benefit3Data'

function Benefit3() {
    return (
        <>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb: 10, background: '#fafafa' }}>
                <Title title="BENEFITS" heading="Dealers" />
                <Box>
                    <CustomGrid Items={Benefit3Data} bgcolor={'linear-gradient(90deg, rgba(254,254,254,1) 60%, rgba(250,250,250,1) 100%);'} />
                </Box>
            </Box>
        </>
    )
}

export default Benefit3
