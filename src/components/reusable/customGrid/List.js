import React, { useEffect } from 'react'
import { Card, Grid, Stack, Typography } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from '../../../assets/features/checkmark-features-ic.png'

function List({ item, xs, sm, md, lg, bgcolor }) {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "400", once: true });
    }, [])


    return (
        <>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} >
                <div data-aos="fade-up">
                    <Card sx={{
                        borderRadius: '15px',
                        m: 1,
                        p: 3,
                        maxWidth: '100%',
                        transition: '0.3s all ease-in-out',
                        background: `${bgcolor}`,
                        border: '1px solid #ebebeb',
                        boxShadow: 'none',

                        '.img': { transition: '0.3s all ease-in-out', height: '100%' },

                        '&:hover .img': {
                            transform: 'rotate(360deg)',
                            transition: '0.3s all ease-in-out'
                        },
                    }}>
                        <Stack direction={'row'} gap={3} sx={{ alignItems: 'center' }} >
                            <img src={img} alt='Check-Box' className='img' />
                            <Typography variant='h6' sx={{ fontWeight: 600, fontSize: { xs: '13px', sm: '14px' } }}>{item}</Typography>
                        </Stack>
                    </Card>
                </div>

            </Grid>
        </>
    )
}

export default List
