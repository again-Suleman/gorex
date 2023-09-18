import React from 'react'

// Images
import onDemand from '../../../../assets/demand/on-demand-mockup.png'
import card1 from '../../../../assets/demand/on-demand-card1.png'
import card2 from '../../../../assets/demand/on-demand-card2.png'
import card3 from '../../../../assets/demand/on-demand-card3.png'
import card4 from '../../../../assets/demand/on-demand-card4.png'
import { Box } from '@mui/material'

function RightDemandBottom() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: {xs:0, sm:5},

                '.subject': {
                    zIndex: 1,
                    transform: { xs: 'scale(0.7) translateY(-60px)', sm: 'scale(1.1)', md: 'scale(1.1)' },
                },

                '.img-container': {
                    position: 'relative',
                },

                '.img1, .img2, .img3, .img4': {
                    position: 'absolute',
                    transition: '0.5s all',
                    transform: { xs: 'scale(0.7)', sm: 'scale(1)' },
                    zIndex: 0,
                },

                '.img1': {
                    right: { xs: '80px',sm:'130px' , lg: '150px' },
                    bottom: {xs: '130px',sm:'100px'},
                },
                '.img2': {
                    right: { xs: '80px',sm:'130px', lg: '150px' },
                    bottom: {xs: '90px',sm:'40px'},
                },
                '.img3': {
                    left: { xs: '-120px',sm:'-60px',  lg:'-40px' },
                    bottom: {xs: '130px',sm:'100px'},
                },
                '.img4': {
                    left: { xs: '-120px',sm:'-60px', lg:'-40px' },
                    bottom:  {xs: '90px',sm:'40px'},
                },

                '.subject:hover + .img-container .img1': { transform: { xs: 'scale(0.7) translateX(-30px)', sm: 'scale(1) translateX(-30px)' }, },
                '.subject:hover + .img-container .img2': { transform: { xs: 'scale(0.7) translateX(-30px)', sm: 'scale(1) translateX(-30px)' } },
                '.subject:hover + .img-container .img3': { transform: { xs: 'scale(0.7) translateX(30px)', sm: 'scale(1) translateX(30px)' } },
                '.subject:hover + .img-container .img4': { transform: { xs: 'scale(0.7) translateX(30px)', sm: 'scale(1) translateX(30px)' } },


            }}>
                <img src={onDemand} className="subject" />
                <div className='img-container'>
                    <img src={card1} className='img1' />
                    <img src={card2} className='img2' />
                    <img src={card3} className='img3' />
                    <img src={card4} className='img4' />
                </div>
            </Box>
        </>
    )
}

export default RightDemandBottom
