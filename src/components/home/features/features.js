import { Box, Grid } from '@mui/material'
import React, { useRef } from 'react'
import Title from '../../reusable/Title'

//components
import { featureItems } from './data'
import FeaturesList from './featuresList'



function Features() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 15 }}>
                <Title title='GOREX APP FEATURES' heading='The Ultimate Automotive Services App.' />
                <Box>
                    <Grid container sx={{ my: 10, }}>
                        {featureItems.map((item) => (
                            <FeaturesList key={item.id} item={item} />
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Features
