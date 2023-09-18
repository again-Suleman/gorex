import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import Title from '../../reusable/Title'

// Data
import { demandItems } from './data'
import DemandList from './demandList'
import DemandBottom from './demandBottom/demandBottom'

function Demand() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, my: 20 }}>
                <Title title='INTRODUCING GOREX ON DEMAND' heading='The Ultimate Convenience in Automotive Services.' />
                <Box>
                    <Grid container sx={{ my: 10, }}>
                        {demandItems.map((item) => (
                            <DemandList key={item.id} item={item} />
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Stack sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, mt: 15, background: 'linear-gradient(90deg, rgba(54,35,128,1) 15%, rgba(73,204,147,1) 90%)', overflow: 'hidden' }}>
                <DemandBottom />
            </Stack>
        </>
    )
}

export default Demand
