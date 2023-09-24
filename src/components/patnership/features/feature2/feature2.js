import React, { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

// Components
import Title from '../../../reusable/Title'
import CustomGrid from '../../../reusable/customGrid/CustomGrid'

// Data
import { Feature2Data } from './feature2Data'

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';


function Feature2() {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "100", once: true });
    }, [])

    return (
        <>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb: 10, }}>
                <Stack direction={'column'} gap={4}>
                    <Title title="FEATURES" heading="Point of Sale" />
                    <div data-aos="fade-down">
                        <Typography variant='h5' sx={{ color: `#8b8b8b`, fontSize: { xs: '14px', sm: '18px' }, width: { xs: '100%', md: '60%' }, px: { xs: 2, sm: 0 } }}>If you are planning to branch out and expand your business through our services these are the Point Of Sale for all your branches, financial systems, and more. All features are available in one place within your approach.</Typography>
                    </div>
                </Stack>
                <Box>
                    <CustomGrid Items={Feature2Data} md={6} lg={6} />
                </Box>
            </Box>

        </>
    )
}

export default Feature2
