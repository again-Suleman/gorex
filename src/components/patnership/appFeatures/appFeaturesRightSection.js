import React, { useEffect } from 'react'
import { Card, Grid, Stack, Typography } from '@mui/material'

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';


function AppFeaturesRightSection({ item }) {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "400", once: true });
    }, [])

    let bgcolor = item.id % 2 !== 0
        ? 'linear-gradient(90deg, rgba(255,139,0,0.1) 10%, rgba(255,255,255,0) 90%)'
        : 'white';

    return (
        <>
            <Grid item xs={12} md={6}>
                <div data-aos="fade-up">
                    <Card sx={{
                        borderRadius: '30px',
                        m: 1,
                        px: 3, py: 4,
                        maxWidth: '100%',
                        minHeight: '100px',
                        transition: '0.3s all ease-in-out',
                        background: `${bgcolor}`,
                        boxShadow: 'none',

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

export default AppFeaturesRightSection
