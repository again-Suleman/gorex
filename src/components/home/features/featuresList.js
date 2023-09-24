import React, { useEffect } from 'react'
import { Box, Card, Grid, Stack, Typography } from '@mui/material'

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';


function FeaturesList({ item }) {
    let bgcolor = item.id % 2 !== 0
        ? 'linear-gradient(90deg, rgba(255,139,0,0.1) 10%, rgba(255,255,255,0) 90%)'
        : 'white';

    useEffect(() => {
        AOS.init({ duration: "500", delay: "400", once: true });
    }, [])

    return (
        <>
            <Grid item xs={12} md={4}>
                <div data-aos="fade-up">

                    <Card sx={{
                        borderRadius: '30px',
                        m: 1,
                        px: 3, py: 4,
                        maxWidth: '100%',
                        minHeight: '160px',
                        transition: '0.3s all ease-in-out',
                        background: `${bgcolor}`,

                        '.img': { transition: '0.3s all ease-in-out', height: '100%' },

                        '&:hover .img': {
                            transform: 'rotate(360deg)',
                            transition: '0.3s all ease-in-out'
                        },
                    }}>
                        <Stack direction={'row'} spacing={3} >
                            <img src={item.img} alt={item.title} className='img' />
                            <Stack direction={'column'}  >
                                <Typography variant='h5' sx={{ fontWeight: 600, mb: 1 }}>{item.title}</Typography>
                                <Typography variant='h6' sx={{ color: '#8b8b8b', fontSize: '14px' }}>{item.text}</Typography>
                            </Stack>
                        </Stack>
                    </Card>
                </div>
            </Grid>
        </>
    )
}

export default FeaturesList
