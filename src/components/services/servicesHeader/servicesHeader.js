import React from 'react'
import { Box } from '@mui/material'

// Components
import WhiteTitle from '../../reusable/WhiteTitle'
import Sides from '../../reusable/Sides'

function ServicesHeader() {
    return (
        <>
            <WhiteTitle title='SERVICES' heading='Get All Your Automotive Services in One Place with Gorex.' />
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 3, pb: 5 }}>
                <Sides
                    typo1={"Gorex is your one-stop shop for all your automotive needs. Our platform connects you with top-rated service providers who offer a wide range of services. We’ve organized our services into easy-to-browse categories, so you can quickly find the service you need."}
                    typo2={"Whether you’re in need of an oil change, brake service, or full engine repair, Gorex has you covered. Plus, with our on-demand service, Gorex On Demand, you can have a skilled technician come to your location and perform the service you need."}
                    typo3={"At Gorex, we take pride in providing you with high-quality services. That’s why we carefully vet all of our service providers to ensure they meet our rigorous standards."}
                />
            </Box>
        </>
    )
}

export default ServicesHeader
