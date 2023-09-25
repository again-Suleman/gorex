import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { Button, Card, Grid, Typography } from '@mui/material'

// Component
import OrangeButton from '../../buttons/orangeButton'

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function WhyGorexList({ item }) {
    const theme = useTheme()

    useEffect(() => {
        AOS.init({ duration: "500", delay: "400", once: true });
    }, [])

    return (
        <>
            <Grid item xs={12} md={6}>
                <div data-aos="fade-up">

                    {item.isCompleted ? (
                        <>
                            <Card sx={{
                                maxWidth: '100%', minHeight: '280px', borderRadius: '40px', m: 1, p: 5,
                                transition: '0.3s all ease-in-out', bgcolor: theme.palette.orangeAccent.main, color: 'white',

                            }}>

                                <Typography variant='h5' sx={{ fontWeight: 600, mt: 5, mb: 1 }}>{item.title}</Typography>
                                <Typography variant='h6' sx={{ mb: 2, color: '#ffd094' }}>{item.text}</Typography>
                                <Link to='/contactus'>
                                    <OrangeButton input='Contact Us' outline={true} />
                                </Link>
                            </Card>
                        </>
                    ) : (
                        <>
                            <Card sx={{
                                maxWidth: '100%', minHeight: '280px', borderRadius: '40px', m: 1, p: 5,
                                transition: '0.3s all ease-in-out',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, rgba(255,139,0,0.1) 10%, rgba(255,255,255,0) 90%)',
                                    transform: 'translateX(15px)',
                                    transition: '0.3s all ease-in-out'
                                },
                            }}>

                                <img src={item.img} alt={item.title} />
                                <Typography variant='h5' sx={{ fontWeight: 600, mt: 2, mb: 1 }}>{item.title}</Typography>
                                <Typography variant='h6' sx={{ color: '#8b8b8b' }}>{item.text}</Typography>
                            </Card>
                        </>
                    )}
                </div>
            </Grid >
        </>
    )
}

export default WhyGorexList
