import React from 'react'
import { Box, Stack } from '@mui/system'

// Components
import NewsLetter from './newsLetter'
import FooterList from './footerList'
import AppStore from '../reusable/applicationStore'
import { Divider } from '@mui/material'
import FooterBottom from './footerBottom'

function Footer() {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(45deg, rgba(54,35,128,1) 5%, rgba(0,0,0,1) 90%)', color: 'white' }}>
        <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 5, }}>

          <Stack direction={{ xs: 'column', md: 'row' }} sx={{}}>
            <Box flex={1.5} sx={{ py: 5 }}>
              <FooterList />
            </Box>
            <Box flex={1} sx={{ py: 5 }}>
              <NewsLetter />
            </Box>
          </Stack>
          
          <Box sx={{ py: 5, display: { xs: 'none', md: 'block' } }}>
            <AppStore />
          </Box>

          <Divider variant='fullWidth' color={'white'} role="presentation" />

          <Box sx={{ display: { xs: 'none', md: 'block' } }} >
            <FooterBottom />
          </Box>

        </Box>
      </Box >
    </>
  )
}

export default Footer
