import { Box, Stack } from '@mui/material'
import React from 'react'

//component
import LeftDemandBottom from './leftDemandBottom'
import RightDemandBottom from './rightDemandBottom'

function DemandBottom() {
  return (
    <>
      <Stack direction={{ xs: 'column-reverse', md: 'row' }} sx={{ }}>
        <Box flex={1} sx={{pt: {xs: 1, sm: 10}}}>
          <LeftDemandBottom  />
        </Box>
        <Box flex={1.2}>
          <RightDemandBottom />
        </Box>
      </Stack>
    </>
  )
}

export default DemandBottom
