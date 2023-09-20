import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

// Components
import Title from '../../reusable/Title'
import Sides from '../../reusable/Sides'

function CompanyObjective() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10 }}>
                <Title title={"COMPANY OBJECTIVES"} heading={"Cutting-edge Technology and Data-driven Solutions."} />
                <Sides
                    typo1={"At Gorex, we use cutting-edge technology and data-driven solutions to empower individuals and organizations in the automotive and transportation industry."}
                    typo2={"Our innovative services aim to provide exceptional value and make a positive impact on society. We are committed to being a trusted partner for all automotive and transportation needs and working towards a common goal of providing unparalleled service to our customers."}
                    typo3={"Join us on our journey toward becoming a leader in the industry."}
                />
            </Box>
        </>
    )
}

export default CompanyObjective
