import React from 'react'

import phone from '../../../assets/patnerships/modules-mockkup-img.png'
import icon1 from '../../../assets/patnerships/icon-img1.png'
import icon2 from '../../../assets/patnerships/icon-img2.png'
import card1 from '../../../assets/patnerships/modules-card1.png'
import card2 from '../../../assets/patnerships/modules-card2.png'
import card3 from '../../../assets/patnerships/modules-card3.png'
import { Box } from '@mui/material'


function ModulesRightSection() {
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    pt: { xs: 0, sm: 15, md: 15, lg: 10 },


                    '.subject ': {
                        transform: { xs: 'scale(0.6)  translateY(180px)', sm: 'scale(0.85)  translateY(70px)', md: 'scale(0.9)  translateY(60px)', lg: 'scale(1) translateY(180px)' },
                        transition: '0.5s all',
                        zIndex: 1
                    },

                    '&:hover .subject': {
                        transform: { xs: 'translateX(-20px) scale(0.6) translateY(180px)', sm: 'translateX(-20px) scale(0.85) translateY(70px)', md: 'translateX(-20px) scale(0.9) translateY(60px)', lg: 'translateX(-20px) scale(1) translateY(180px)' },
                        transition: '0.5s all',
                    },

                    '.img-container': {
                        position: 'relative',

                    },
                    '.img1, .img2, .img3, img4, .icon1, .icon2 ': {
                        position: 'absolute',
                        transition: '0.5s all',
                    },

                    '.img1': {
                        transform: { xs: 'scale(0.7)', sm: 'scale(0.9)', md: 'scale(1)' },
                        right: { xs: 180, sm: 240, md: 240, lg: 240 },
                        bottom: { xs: 140, sm: 240, md: 260, lg: 160 },
                        zIndex: 0
                    },
                    '.img2': {
                        transform: { xs: 'scale(0.7)', sm: 'scale(0.9)', md: 'scale(1)' },
                        right: { xs: 30, sm: 5, md: 5, lg: 5 },
                        top: { xs: 50, sm: -80, md: -100, lg: 20 },
                        zIndex: 0

                    },
                    '.img3': {
                        transform: { xs: 'scale(0.7)', sm: 'scale(0.9)', md: 'scale(1)' },
                        right: { xs: 30, sm: 5, md: 5, lg: 5 },
                        top: { xs: 120, sm: 20, md: 0, lg: 120 },
                        zIndex: 0

                    },
                    '.icon1': {
                        transform: { xs: 'scale(0.7)', sm: 'scale(0.9)', md: 'scale(1)' },
                        right: { xs: 40, sm: -75, md: -100, lg: -100 },
                        top: { xs: 250, sm: 0, md: 0, lg: 120 },
                        zIndex: 0
                    },
                    '.icon2': {
                        transform: { xs: 'scale(0.7)', sm: 'scale(0.9)', md: 'scale(1)' },
                        right: { xs: 200, sm: 240, md: 240 },
                        bottom: { xs: 240, sm: 360, md: 380, lg: 280 },
                        zIndex: 0
                    },


                    '&:hover  .img1': {
                        transform: { xs: 'translate(-20px, 20px) scale(0.7)', sm: 'translate(-20px, 20px) scale(0.9)', md: 'translate(-20px, 20px) scale(1)', lg: 'translate(-20px, 20px)' },
                    },
                    '&:hover .img2': {
                        transform: { xs: 'translateY(-20px) scale(0.7)', sm: 'translateY(-20px)scale(0.9)', md: 'translateY(-20px) scale(1)', lg: 'translateY(-20px) ' },
                    },
                    '&:hover .img3': {
                        transform: { xs: 'translateY(20px) scale(0.7)', sm: 'translateY(20px) scale(0.9)', md: 'translateY(20px) scale(1)', lg: 'translateY(20px)' },
                    },
                    '&:hover .icon1': {
                        transform: { xs: 'translate(-20px, -20px) scale(0.7)', sm: 'translate(-20px, -20px) scale(0.9)', md: 'translate(-20px, -20px) scale(1)', lg: 'translate(-20px, -20px) ' },
                    },
                    '&:hover .icon2': {
                        transform: { xs: 'translate(-20px, -20px) scale(0.7)', sm: 'translate(-20px, -20px) scale(0.9)', md: 'translate(-20px, -20px) scale(1)', lg: 'translate(-20px, -20px) ' },
                    },
                }}
            >
                <Box
                    className="background-shape"
                    sx={{
                        position: 'absolute',
                        top: { xs: 250, sm: 300, md: 350 },
                        background: 'linear-gradient(180deg, rgba(255,139,0,0.2) 10%, rgba(255,255,255,0) 60%)',
                        width: { xs: 350, sm: 550, md: 550 },
                        height: { xs: 350, sm: 550, md: 550 },
                        borderRadius: '50%',
                        zIndex: 0,
                    }}
                ></Box>

                <img src={phone} className='subject' />
                <div className="img-container">
                    <img src={card1} className='img1' />
                    <img src={card2} className='img2' />
                    <img src={card3} className='img3' />
                    <img src={icon1} className='icon1' />
                    <img src={icon2} className='icon2' />
                </div>
            </Box>
        </>
    )
}

export default ModulesRightSection
