import React from 'react'

//imges
import rev_up from '../../../../assets/working/rev-up-mockup.png'
import card1 from '../../../../assets/working/rev-up-card1.png'
import card2 from '../../../../assets/working/rev-up-card2.png'
import { Box } from '@mui/material'



function RightBottom() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          pt: 5,


          '.subject ': {
            
            transform: {xs: 'scale(0.8) translateY(18%)', sm: 'scale(0.9) translateY(7%)' ,md: 'scale(1.0)'},
            transition: '0.5s all',
            zIndex: 1
          },

          '.subject:hover': {
            transform: {xs: 'scale(1)', sm: 'scale(1) ' ,md: 'scale(1.1)'},
            transition: '0.5s all',
          },

          '.img-container': {
            position: 'relative',
            
          },
          '.img1, .img2': {
            position: 'absolute',
            transition: '0.5s all',
          },
          '.img1': {
            transform: {xs: 'scale(0.75)', sm: 'scale(1)' ,md: 'scale(1)'},
            right: {xs: '250px',  md:'350px'},
            bottom: '30px',
            zIndex: 0
          },
          '.img2': {
            transform: {xs: 'scale(0.8)', sm: 'scale(1)' ,md: 'scale(1.1)'},
            right: '30px',
            top: '-40px',
            zIndex: 0

          },
          '.subject:hover + .img-container .img1': {
            transform: 'translateX(-30px)',
          },
          '.subject:hover + .img-container .img2': {
            transform: 'translateY(-30px)',
          },
        }}
      >
        <img src={rev_up} className='subject' />
        <div className="img-container">
          <img src={card1} className='img1' />
          <img src={card2} className='img2' />
        </div>
      </Box>

    </div>
  )
}

export default RightBottom
