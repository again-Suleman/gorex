import { Box } from '@mui/material'
import React from 'react'

// images
import phone from '../../../assets/patnerships/phone-mockup.png'
import card1 from '../../../assets/patnerships/about-us-img.png'
import card2 from '../../../assets/patnerships/model-img2.png'

function RightPatnershipSection() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: '100%',
                pt: 5,

                '.subject': {
                    zIndex: 0,
                },

                '.img-container': {
                    position: 'relative',
                },

                '.img1, .img2 ': {
                    position: 'absolute',
                    transition: '0.5s all',
                    width: '150px',
                    zIndex: 1,
                },

                '.img1': {
                    transform: 'scale(1.4)',
                    right: { xs: '130px', sm: '150px', lg: '200px' },
                    bottom: { xs: '40px', sm: '40px' },
                },
                '.img2': {
                    right: { xs: '-130px', sm: '-150px', lg: '-160px' },
                    bottom: { xs: '0px', sm: '0px' },
                },

                '.subject:hover + .img-container .img1': { transform: { xs: 'scale(1.4) translateX(30px)', sm: 'scale(1.4) translateX(30px)' }, },
                '.subject:hover + .img-container .img2': { transform: { xs: 'translateX(-30px)', sm: 'translateX(-30px)' }, },
            }}>
                <img src={phone} className="subject" />
                <div className='img-container'>
                    <img src={card1} className="img1" />
                    <img src={card2} className="img2" />
                </div>
            </Box>

        </>
    )
}

export default RightPatnershipSection
