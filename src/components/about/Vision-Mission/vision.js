import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


import Title from '../../reusable/Title'
import Sides from '../../reusable/Sides'

function Vision() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10 }}>
                <Title title="Our Vision" />
                <Sides
                    typo1={"At Go and Relax Co., we’re committed to revolutionizing the automotive service industry by providing easy access to top-quality products and services."}
                    typo2={"Our vision is to empower small businesses and independent service providers to flourish and reach new customers through our platform."}
                    typo3={"We strive to make the automotive service industry more accessible and convenient for everyone and to be the go-to destination for all automotive service needs."}

                />
            </Box>

        </>
    )
}

export default Vision
