import { useTheme } from '@emotion/react'
import { Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function MultipleServicesList({ item }) {
    const theme = useTheme()
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{
                    maxWidth: '100%',
                    height: '100%',
                    // minHeight: '280px',
                    borderRadius: '30px',
                    m: {xs: 0, sm:1},
                    pt: 5,
                    px: { xs: 3, md: 5 },
                    transition: '0.3s all ease-in-out',
                    bgcolor: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                    transition: '0.3s all ease-in-out',

                    '&:hover': {
                        background: 'linear-gradient(90deg, rgba(255,139,0,0.1) 10%, rgba(255,255,255,0) 90%)',
                        transform: 'translateX(15px)',
                        transition: '0.3s all ease-in-out'
                    },

                }}>
                    <img src={item.image} alt={item.title} />
                    <Typography variant='h5' sx={{ fontWeight: 600, mt: 2, mb: 1 }}>{item.title}</Typography>
                    <Stack direction='column' gap={1} sx={{ mt: 2, mb: 5 }}>
                        {item.description.map((desc, index) => {
                            return (
                                <>
                                    <Stack direction={'row'} gap={2}>
                                        <img src={item.checkbox} style={{ transform: 'scale(0.9)', height: '100%' }} />
                                        <Typography variant='h6' key={index} sx={{ color: '#8b8b8b' }}>{desc}</Typography>
                                    </Stack>
                                </>
                            )
                        })}

                    </Stack>
                </Card>
            </Grid>

        </>
    )
}

export default MultipleServicesList
