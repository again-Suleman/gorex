import { Box, Stack } from '@mui/material'
import React from 'react'
import LeftBottom from './leftBottom';
import RightBottom from './rightBottom';

function WorkingBottom() {
  return (
    <div>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ pt: 10,}}>
        <Box flex={1}>
          <LeftBottom  />
        </Box>
        <Box flex={1} >
          <RightBottom />
        </Box>
      </Stack>
    </div>
  )
}

export default WorkingBottom
