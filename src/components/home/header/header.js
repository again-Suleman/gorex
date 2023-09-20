import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'

// Components
import LeftHeader from './leftHeader'
import RightHeader from './rightHeader'


function Header() {

  return (
    <>
      <Box sx={{ position: 'relative'}}>

        {/* Background Curve :? */}
        <Box sx={{
          position: 'absolute',
          zIndex: -1,
          top: '0',
          left: '0',
          height: "100%", width: "100%",
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 35%);',
          background: 'linear-gradient(90deg, rgba(54,35,128,1) 15%, rgba(73,204,147,1) 90%)'
        }} ></Box>

        <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10, }}>
          <Stack justifyContent={'center'} direction={{ sm: 'column', md: 'row' }} minHeight={'100vh'}>

            {/* Left Side */}
            <LeftHeader />


            {/* right side */}
            <RightHeader />

          </Stack>
        </Box>
      </Box>


    </>
  )
}

export default Header
