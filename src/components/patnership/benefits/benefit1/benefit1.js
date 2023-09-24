import React from 'react'
import { Box } from '@mui/material'

// Components
import Title from '../../../reusable/Title'
import CustomGrid from '../../../reusable/customGrid/CustomGrid'

// Data
import { Benefit1Data } from './benefit1Data'

function Benefit1() {
    return (
        <>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb: 10, background: '#fafafa' }}>
                <Title title="BENEFITS" heading="Service Providers" />
                <Box>
                    <CustomGrid Items={Benefit1Data} bgcolor={'linear-gradient(90deg, rgba(254,254,254,1) 60%, rgba(250,250,250,1) 100%);'} lg={3} />
                </Box>
            </Box>
        </>
    )
}

export default Benefit1
