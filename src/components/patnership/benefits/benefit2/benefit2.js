import React, { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

// Components
import Title from '../../../reusable/Title'
import CustomGrid from '../../../reusable/customGrid/CustomGrid'

// Data
import { Benefit2Data } from './benefit2Data'

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';


function Benefit2() {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "100", once: true });
    }, [])
    
    return (
        <>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb: 10, }}>
                <Stack direction={'column'} gap={4}>
                    <Title title="BENEFITS" heading="B2B customers" />
                    <div data-aos="fade-down">
                        <Typography variant='h5' sx={{ color: `#8b8b8b`, fontSize: { xs: '14px', sm: '18px' }, width: { xs: '100%', md: '60%' }, px:{xs:2,sm:0} }}>Gorex provides our corporate customer’s opportunity to not only get the most out of our services but also can provide all these services yourself to the customers directly. You can manage your fleet with</Typography>
                    </div>
                </Stack>
                <Box>
                    <CustomGrid Items={Benefit2Data} lg={3} />
                </Box>
            </Box>

        </>
    )
}

export default Benefit2
