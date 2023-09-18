import { Stack, Typography } from '@mui/material'
import React from 'react'

// component
import AppStore from '../../../reusable/applicationStore'

function LeftDemandBottom() {
  return (
    <>
        <Stack direction={'column'} sx={{mb:5}}>
            <Typography variant='h3' sx={{color: 'white',fontWeight: 600, fontSize: {xs: '22px', sm: '24px', md: '28px'}, mb:5 }}>Book your next on-demand service and have a service provider come to you.</Typography>
            <AppStore />
        </Stack>
    </>
  )
}

export default LeftDemandBottom
