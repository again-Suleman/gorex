import React from 'react'
import { Box } from '@mui/material'

// Components
import Sides from '../../reusable/Sides'
import WhiteTitle from '../../reusable/WhiteTitle'

function OffersHeader() {
    return (
        <>
            <WhiteTitle title='OFFERS' heading='Explore the Ultimate Convenience of Automotive Services with Gorex.' />
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 3, pb: 5 }}>
                <Sides
                    typo1={"Discover an array of our exclusive On Demand offers, bringing the service to your doorstep! Ranging from efficient tyre changes to seamless oil changes and refreshing car washes. We have curated a diverse selection of top-rated, highly skilled service providers, covering every aspect of your vehicle’s care. Our user-friendly categorization ensures finding the perfect service is a breeze."}
                    typo2={"Act now! This exceptional offer is available for a limited time only in Riyadh. Take advantage of the chance to experience the unrivaled convenience of our on-demand service."}
                    typo3={"Trust Gorex to exceed your expectations and provide automotive care that seamlessly integrates into your busy schedule."}
                />
            </Box>
        </>
    )
}

export default OffersHeader
