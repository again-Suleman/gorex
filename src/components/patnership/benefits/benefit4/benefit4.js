import React, { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

// Components
import Title from '../../../reusable/Title'
import CustomGrid from '../../../reusable/customGrid/CustomGrid'

// Data
import { Benefit4Data } from './benefit4Data'

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';


function Benefit4() {
    useEffect(() => {
        AOS.init({ duration: "500", delay: "100", once: true });
    }, [])

    return (
        <>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb: 10, }}>
                <Stack direction={'column'} gap={4}>
                    <Title title="BENEFITS" heading="Merchant" />
                    <div data-aos="fade-down">
                        <Typography variant='h5' sx={{ color: `#8b8b8b`, fontSize: { xs: '14px', sm: '18px' }, width: { xs: '100%', md: '60%' }, px:{xs:2,sm:0} }}>You can now be a part of Gorex by joining as a Merchant to the service provider at the branch.</Typography>
                    </div>
                </Stack>
                <Box>
                    <CustomGrid Items={Benefit4Data} />
                </Box>
            </Box>

        </>
    )
}

export default Benefit4
