import { Box, Stack } from '@mui/material'
import React from 'react'

// Components
import OrangeButton from '../../buttons/orangeButton'
import img from '../../../assets/Solutions/redSea/rsd-ic.png'
import Title from '../../reusable/Title'
import Sides from '../../reusable/Sides'

function RedSea() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10, }}>
                <Stack direction={'row'} gap={{ xs: 0, sm: 5, md: 5 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={img} alt="" style={{ height: '100%' }} />
                    <Title title={"RED SEA DIGITAL"} heading={"AI-based Audience Analysis Revolutionized."} />
                </Stack>

                <Stack direction={'column'} width={{ xs: '100%', md: '80%' }}>
                    <Sides
                        typo1={"Revolutionizing audience analysis for businesses with an innovative AI-based platform, Red Sea Digital. Get in-depth analytics like footfall, demographics, and heatmaps with just a camera feed. A cost-effective and convenient solution for businesses of any size."}
                        typo2={"Red Sea Digital’s AI algorithms provide real-time data to make informed decisions. Optimize operations, enhance customer experience, and boost your bottom line – whether you’re a retailer or venue owner. Red Sea Digital provides the insights you need."}
                        typo3={"With Red Sea Digital, your data is safe and secure. They use advanced encryption methods, making the platform accessible only to authorized personnel. Unlock the power of AI-based audience measurement and take your operations to the next level."}
                    />
                    <a href="https://rsd.ai/" target="_blank" style={{ textDecoration: 'none' }}>
                        <OrangeButton input={'Visit Red Sea'} />
                    </a>
                </Stack>
            </Box>
        </>
    )
}

export default RedSea
