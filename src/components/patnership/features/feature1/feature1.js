import React, { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

// Components
import Title from '../../../reusable/Title'
import CustomGrid from '../../../reusable/customGrid/CustomGrid'

// Data
import { Feature1Data } from './feature1Data'

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';


function Feature1() {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "100", once: true });
    }, [])

    return (
        <>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb: 10, background: '#fafafa' }}>
                <Stack direction={'column'} gap={4}>
                    <Title title="FEATURES" heading="Individual customers" />
                    <div data-aos="fade-down">
                        <Typography variant='h5' sx={{ color: `#8b8b8b`, fontSize: { xs: '14px', sm: '18px' }, width: { xs: '100%', md: '60%' }, px: { xs: 2, sm: 0 } }}>Signup to Gorex and make your life easier than ever. Gorex brings all car care and car maintenance just a signature tap away. Empower yourself with your own individual service and utilize features like:</Typography>
                    </div>
                </Stack>
                <Box>
                    <CustomGrid Items={Feature1Data} bgcolor={'linear-gradient(90deg, rgba(254,254,254,1) 60%, rgba(250,250,250,1) 100%);'} lg={3} />
                </Box>
            </Box>

        </>
    )
}

export default Feature1
