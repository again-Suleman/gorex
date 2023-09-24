import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'

//component
import LeftDemandBottom from './leftDemandBottom'
import RightDemandBottom from './rightDemandBottom'

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

function DemandBottom() {

  useEffect(() => {
    AOS.init({ duration: "500", delay: "400", once: true });
}, [])

  return (
    <div data-aos="fade-down">
      <Stack direction={{ xs: 'column-reverse', md: 'row' }} sx={{ }}>
        <Box flex={1} sx={{pt: {xs: 1, sm: 10}}}>
          <LeftDemandBottom  />
        </Box>
        <Box flex={1.2}>
          <RightDemandBottom />
        </Box>
      </Stack>
    </div>
  )
}

export default DemandBottom
