import React from 'react';
import { Box } from '@mui/material';

// Images
import subject from '../../../assets/Solutions/header/solution-img.png';
import card2 from '../../../assets/Solutions/header/gorex-sticker.png';
import card1 from '../../../assets/Solutions/header/rsd-sticker.png';
import card3 from '../../../assets/Solutions/header/tracking-sticker.png';

function SolutionsHeaderRight() {
    return (
        <Box
            sx={{

                // overflow: 'hidden',
                // border: '1px solid red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: '100%',
                minHeight: '300px',
                pt: 1,
                backgroundImage: `url(${subject})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                position: 'relative',

                '.img-container': {
                    position: 'relative',

                },

                '.img1, .img2, .img3': {
                    position: 'absolute',
                    transition: '0.5s all',
                    zIndex: 1,
                },

                '.img1': {
                    transform: 'scale(0.8)',
                    right: { xs: 50, sm: 50, md: 70, lg: 50 },
                    bottom: { xs: 40, sm: 40, md: 80, lg: 40 },
                },
                '.img2': {
                    transform: 'scale(0.8)',
                    left: -20,
                    bottom: { xs: 170, md: 210, lg: 170 },
                },
                '.img3': {
                    transform: 'scale(0.9)',
                    left: { xs: 30, md: 40, lg: 30 },
                    bottom: { xs: 35, md: 60, lg: 35 },
                },

                // Hover effect for background image
                '&:hover .img-container .img1': { transform: 'scale(0.8) translateX(-30px) translateY(-30px)' },
                '&:hover .img-container .img2': { transform: 'scale(0.8) translateX(30px) translateY(10px)' },
                '&:hover .img-container .img3': { transform: 'scale(0.9) translateX(-20px) translateY(30px)' },
            }}
        >
            <div className="img-container">
                <img src={card1} className="img1" />
                <img src={card2} className="img2" />
                <img src={card3} className="img3" />
            </div>
        </Box>
    );
}

export default SolutionsHeaderRight;
