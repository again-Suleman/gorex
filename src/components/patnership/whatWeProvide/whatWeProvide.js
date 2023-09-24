import React from 'react'
import { Box } from '@mui/material'

import Title from '../../reusable/Title'
import { ProvideItems } from './data'
import CustomGrid from '../../reusable/customGrid/CustomGrid'

function WhatWeProvide() {
  return (
    <>
    <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb:10 , background: '#fafafa'}}> 
        <Title title="WHAT WE PROVIDE" heading="Automotive Solutions Made Simple." /> 
        <Box>
            <CustomGrid Items={ProvideItems} bgcolor={'linear-gradient(90deg, rgba(254,254,254,1) 60%, rgba(250,250,250,1) 100%);'} />
        </Box>
    </Box>
    </>
  )
}

export default WhatWeProvide
