import React from 'react'
import { Box, Grid, Stack } from '@mui/material'

// Components
import MultipleServicesList from './multipleServicesList'
import { ServicesItems } from './data'
import OnDemandService from './onDemand/onDemandService'

function MultipleServices() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10, background: '#fafafa' }}>
                <Box>
                    <Grid container sx={{ my: 10, }}>
                        {ServicesItems.map((item) => (
                            <MultipleServicesList key={item.id} item={item} />
                        ))}
                    </Grid>
                </Box>

                <Box sx={{background: 'linear-gradient(45deg, rgba(54,35,128,1) 5%, rgba(0,0,0,1) 90%)', color: 'white', borderRadius: '20px'}}>
                    <OnDemandService />
                </Box>

            </Box>

        </>
    )
}

export default MultipleServices
