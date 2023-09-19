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
          pt: {xs: 0,  sm:10, md: 5},


          '.subject ': {
            transform: {xs: 'scale(0.55) translateY(45%)', sm: 'scale(0.9) translateY(8%)' ,md: 'scale(0.9) translateY(15%)', lg: 'scale(1) translateY(0%)'},
            transition: '0.5s all',
            zIndex: 1
          },

          '.subject:hover': {
            transform: {xs: 'scale(0.6) translateY(35%)', sm: 'scale(1) ' ,md: 'scale(1) translateY(15%)', lg: 'scale(1.1) translateY(0%)'},
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
            transform: {xs: 'scale(0.5)', sm: 'scale(1)' ,md: 'scale(1)'},
            right: {xs: '190px',  sm:'250px', md:'300px'},
            bottom: {xs: '-30px',  sm:'30px'},
            zIndex: 0
          },
          '.img2': {
            transform: {xs: 'scale(0.5)', sm: 'scale(1)' ,md: 'scale(1.1)'},
            right: {xs: '50px',  sm:'30px'},
            top: {xs: '80px',  sm:'-40px'},
            zIndex: 0

          },
          '.subject:hover + .img-container .img1': {
            transform: {xs:'translateX(-30px) scale(0.5)' ,sm:'translateX(-30px) scale(1)'},
          },
          '.subject:hover + .img-container .img2': {
            transform: {xs:'translateY(-30px) scale(0.5)' ,sm:'translateY(-30px) scale(1)'},
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
