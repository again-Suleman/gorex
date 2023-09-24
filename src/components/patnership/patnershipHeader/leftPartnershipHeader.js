import React from 'react'
import { Box } from '@mui/material'

// Components
import phone from '../../../assets/patnerships/phone-mockup.png'
import subject1 from '../../../assets/patnerships/about-us-img.png'
import subject2 from '../../../assets/patnerships/model-img2.png'
import card1 from '../../../assets/patnerships/modules-card2.png'
import card2 from '../../../assets/patnerships/modules-card3.png'


function LeftPartnershipHeader() {
    return (
        <>
            <Box sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: '100%',
                pt: { xs: 0, md: 5 },

                '.subject': {
                    transform: { xs: 'translateY(100px) scale(0.7)', sm: 'translateY(80px) scale(0.9)' },
                    zIndex: 1,
                },

                '.img-container': {
                    position: 'relative',
                },

                '.img1, .img2, .img3, .img4  ': {
                    position: 'absolute',
                    width: 200,
                    transition: '0.5s all',
                    zIndex: 1,
                },

                '.img1': {
                    transform: { xs: 'scale(0.8)', sm: 'scale(1)', md: 'scale(1.1)' },
                    right: { xs: 90, sm: 130, md: 130, lg: 130 },
                    bottom: { xs: -90, sm: -60, md: -60, lg: -50 },
                    zIndex: 2
                },
                '.img2': {
                    transform: { xs: 'scale(0.55)', sm: 'scale(0.75)', md: 'scale(0.85)' },
                    right: { xs: -110, sm: -140, md: -140, lg: -140 },
                    bottom: { xs: -150, sm: -120, md: -120, lg: -120 },
                    zIndex: 2

                },
                '.img3': {
                    transform: { xs: 'scale(0.9)', sm: 'scale(1.2)', md: 'scale(1.3)' },
                    right: { xs: -100, sm: -150, md: -150, lg: -150 },
                    top: { xs: -220, sm: -300, md: -300, lg: -300 },
                    zIndex: 0

                },
                '.img4': {
                    transform: { xs: 'scale(0.9)', sm: 'scale(1.2)', md: 'scale(1.3)' },
                    right: { xs: 80, sm: 150, md: 150, lg: 150 },
                    top: { xs: -220, sm: -260, md: -260, lg: -260 },
                    zIndex: 0
                },


                '&:hover  .img1': {
                    transform: { xs: 'translateX(30px) scale(0.8)', sm: 'translateX(30px) scale(1)', md: 'translateX(30px) scale(1.1)', lg: 'translateX(30px) scale(1.1)' },
                },
                '&:hover .img2': {
                    transform: { xs: 'translateX(-30px) scale(0.55)', sm: 'translateX(-30px) scale(0.75)', md: 'translateX(-30px) scale(0.85)', lg: 'translateX(-30px) scale(0.85)' },
                },
                '&:hover .img3': {
                    transform: { xs: 'translate(-40px, -10px)scale(0.9)', sm: 'translate(-40px, -10px)scale(1.2)', md: 'translate(-40px, -10px)scale(1.3)', lg: 'translate(-40px, -10px) scale(1.3)' },
                },
                '&:hover .img4': {
                    transform: { xs: 'translateY(40px) scale(0.9)', sm: 'translateY(40px) scale(1.2)', md: 'translateY(40px) scale(1.3)', lg: 'translateY(40px) scale(1.3)' },
                },


            }}>
                <Box
                    className="background-shape"
                    sx={{
                        position: 'absolute',
                        top: { xs: 120, sm: 180, md: 200, lg: 100 },
                        background: 'linear-gradient(180deg, rgba(255,139,0,0.2) 10%, rgba(255,255,255,0) 60%)',
                        width: { xs: 350, sm: 550, md: 550 },
                        height: { xs: 350, sm: 550, md: 550 },
                        borderRadius: '50%',
                        zIndex: 0,
                    }}
                ></Box>

                <img src={phone} className="subject" />
                <div className='img-container'>
                    <img src={subject1} className="img1" />
                    <img src={subject2} className="img2" />
                    <img src={card1} className="img3" />
                    <img src={card2} className="img4" />
                </div>
            </Box>

        </>
    )
}

export default LeftPartnershipHeader
