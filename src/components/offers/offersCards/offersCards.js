import React from 'react'
import { Box } from '@mui/material'


import { OffersItems } from './data'
import Cards from '../../reusable/cards/cards'


function OffersCards() {
  return (
    <>
      {OffersItems.map((item, index)=>{
        return(
            <Box key={index} sx={{px:3}}>
                <Cards item={item} inverse={true} />
            </Box>
        )
      })}
    </>
  )
}

export default OffersCards
