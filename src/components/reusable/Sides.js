import React, { useEffect } from 'react'
import { Stack, Typography } from '@mui/material'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Sides({ white, typo1, typo2, typo3 }) {
    useEffect(() => {
        AOS.init({ duration: "500", delay: "400", once: true });
    }, [])

    const color = white ? 'white' : '#898989'

    return (
        <>
            <Stack direction={'column'} gap={4} sx={{ py: 5, px: { xs: 2, sm: 0 } }}>
                <div data-aos="fade-up">
                    <Typography variant='h5' sx={{ color: `${color}`, fontSize: { xs: '14px', sm: '18px' } }}>{typo1}</Typography>
                </div>
                <div data-aos="fade-up">
                    <Typography variant='h5' sx={{ color: `${color}`, fontSize: { xs: '14px', sm: '18px' } }}>{typo2}</Typography>
                </div>
                <div data-aos="fade-up">
                    <Typography variant='h5' sx={{ color: `${color}`, fontSize: { xs: '14px', sm: '18px' } }}>{typo3}</Typography>
                </div>
            </Stack>
        </>
    )
}

export default Sides
