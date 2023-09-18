import { Card, Grid, Typography } from '@mui/material'
import React from 'react'


function DemandList({ item }) {
    let bgcolor = item.id % 2 !== 0
        ? 'linear-gradient(90deg, rgba(255,139,0,0.1) 10%, rgba(255,255,255,0) 90%)'
        : 'white';
        
    return (
        <>
            <Grid item xs={12} md={4}>
                <Card sx={{
                    m: 1, p: 5,
                    maxWidth: '100%',
                    minHeight: '300px',
                    borderRadius: '40px',
                    transition: '0.3s all ease-in-out',
                    background: `${bgcolor}`,

                    '.img': { transition: '0.3s all ease-in-out' },

                    '&:hover .img': {
                        transform: 'translateX(15px) rotate(360deg)',
                        transition: '0.3s all ease-in-out'
                    },
                }}>
                    <img src={item.img} alt={item.title} className='img' />
                    <Typography variant='h5' sx={{ fontWeight: 600, mt: 2, mb: 1 }}>{item.title}</Typography>
                    <Typography variant='h6' sx={{ color: '#8b8b8b', fontSize: '13px' }}>{item.text}</Typography>
                </Card>
            </Grid>
        </>
    )
}

export default DemandList
