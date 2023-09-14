import React from 'react'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'


// Componenets
import OrangeButton from '../buttons/orangeButton'
import TransparentButton from '../buttons/transparentButton'

// Images
import appStore from '../../assets/header/desktop-appstore.png'
import playStore from '../../assets/header/desktop-play.png'
import headerImg from '../../assets/header/main-header-mockup.png'
import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'



function Header() {

  const theme = useTheme()

  return (
    <>
      <Box sx={{ position: 'relative' }}>

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

        <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10, fontFamily: 'Poppins' }}>
          <Stack justifyContent={'center'} direction={{ sm: 'column', md: 'row' }} minHeight={'100vh'}>

            {/* Left Side */}
            <Stack flex={1.3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>

              <Box sx={{ px: 2 }}>
                <Stack sx={{ color: 'white', my: 7 }}>
                  <Typography variant='h1' sx={{ fontSize: { xs: '36px', md: '48px' }, fontWeight: 600, letterSpacing: 1 }} >The Ultimate Automotive Services Marketplace.</Typography>
                  <Typography variant='h4' sx={{ fontSize: { xs: '20px', md: '22px' }, pt: 3 }}>Step into the modern Automotive Ecosystem</Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} >
                  <a href="https://apps.apple.com/pk/app/gorex-customer/id1633313842" target="_blank" rel="noopener noreferrer">
                    <img src={appStore} alt="App Store" />
                  </a>

                  <a href="https://play.google.com/store/apps/details?id=com.gorexcustomer&pli=1" target="_blank" rel="noopener noreferrer">
                    <img src={playStore} alt="Play Store" />
                  </a>
                </Stack>
              </Box>

              <Box sx={{ my: 10 }}>
                <Typography variant='h4' sx={{ maxWidth: '70%', fontWeight: '600', mx: 2 }}>Expand your reach and become a Gorex partner, Join today!</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{ my: 2 }}>
                  <Link to="/web/login">
                    <OrangeButton input="Register now" />
                  </Link>

                  <Link to="/contactus">
                    <TransparentButton input="Contact us" />
                  </Link>
                </Stack>
              </Box>
            </Stack>


            {/* right side */}
            <Box
              flex={1}
              sx={{
                display: 'flex',
                justifyContent: 'center',

                '& img': {
                  transition: 'transform 0.3s ease-in-out',
                  width: { xs: '290px', sm: '400px', md: 'auto' }
                },

                '&:hover img': {
                  transform: 'translateX(15px)',
                  transition: '0.3s all ease-in-out',
                },
              }}
            >
              <img src={headerImg} alt="Header Image" />
            </Box>
          </Stack>
        </Box>
      </Box>


    </>
  )
}

export default Header
