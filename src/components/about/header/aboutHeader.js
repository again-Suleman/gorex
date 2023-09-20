import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import WhiteTitle from '../../reusable/WhiteTitle'
import Sides from '../../reusable/Sides'

function AboutHeader() {
    return (
        <>
            <WhiteTitle title='ABOUT GO AND RELAX C0.' heading='Your One-stop Shop for all Your Automotive Needs.' />
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 3, pb: 5 }}>
                <Sides
                    typo1={"We connect you with trusted merchants who offer a wide range of services, including tire replacement, tinting, car washing, repairs, and oil changes. Our platform is user-friendly and efficient, making it easy for you to book the services you need with just a few clicks."}
                    typo2={"We carefully vet our merchants to ensure they meet our high standards of quality and professionalism, so you can trust that you’ll be connected with the best service providers in the industry. Our goal is to make your life easier and more convenient by providing you with the best possible service."}
                    typo3={"Whether you’re an individual customer or a corporate client, we make it easy for you to access the services you need. If you have any questions or concerns, our dedicated team is always here to help. Trust Gorex for all your automotive needs."}
                />
            </Box>
        </>
    )
}

export default AboutHeader
