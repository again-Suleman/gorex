import React, { useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import LeftBottom from './leftBottom';
import RightBottom from './rightBottom';

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

function WorkingBottom() {

  useEffect(() => {
    AOS.init({ duration: "500", delay: "400", once: true });
  }, [])

  return (
    <div data-aos="fade-up">
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ pt: 10, }}>
        <Box flex={1}>
          <LeftBottom />
        </Box>
        <Box flex={1} >
          <RightBottom />
        </Box>
      </Stack>
    </div>
  )
}

export default WorkingBottom
