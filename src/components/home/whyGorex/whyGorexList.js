import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'

// Component
import OrangeButton from '../../buttons/orangeButton'
import { useTheme } from '@emotion/react'

function WhyGorexList({ item }) {
    const theme = useTheme()
    return (
        <>
            <Grid item xs={12} md={6}>
                {item.isCompleted ? (
                    <>
                        <Card sx={{
                            maxWidth: '100%', minHeight: '280px', borderRadius: '40px', m: 1, p: 5,
                            transition: '0.3s all ease-in-out', bgcolor: theme.palette.orangeAccent.main, color: 'white',

                        }}>

                            <Typography variant='h5' sx={{ fontWeight: 600, mt: 5, mb: 1 }}>{item.title}</Typography>
                            <Typography variant='h6' sx={{ mb: 2, color: '#ffd094' }}>{item.text}</Typography>
                            <OrangeButton input='Contact Us' />
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
            </Grid >
        </>
    )
}

export default WhyGorexList
