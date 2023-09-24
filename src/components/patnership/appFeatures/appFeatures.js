import { Box, Grid } from '@mui/material'
import React from 'react'

// Components
import Title from '../../reusable/Title'
import AppFeaturesRightSection from './appFeaturesRightSection'

// Data
import { AppFeaturesItems } from './appFeaturesData'


function AppFeatures() {
    return (
        <>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb: 10, background: '#fafafa' }}>
                <Title title="PARTNER APP FEATURES" heading="The Ultimate Automotive Services App for Service Providers." />
                <Box>
                    <Grid container sx={{ my: 10, }}>
                        {AppFeaturesItems.map((item) => (
                            <AppFeaturesRightSection key={item.id} item={item} />
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default AppFeatures
