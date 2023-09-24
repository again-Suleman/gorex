import React from 'react'
import { Box } from '@mui/system'
import WhiteTitle from '../../reusable/WhiteTitle'

// Components
import LeftPartnershipHeader from './leftPartnershipHeader'
import RightPartnershipsHeader from './rightPartnershipsHeader'
import { Stack } from '@mui/material'

function PatnershipHeader() {
  return (
    <>
      <WhiteTitle title='PARTNERSHIPS' heading='Join forces for automotive excellence.' />
      <Stack direction={{ xs: 'column-reverse', md: 'row' }} sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, py: 7, overflow: 'hidden' }}>
        <Box flex={1}>
          <LeftPartnershipHeader />
        </Box>
        <Box flex={1} sx={{ px: { xs: 0, md: 5 } }}>
          <RightPartnershipsHeader />
        </Box>
      </Stack>
    </>
  )
}

export default PatnershipHeader
