import React from 'react';

import subject from '../../../assets/carousel/about-us-img@2x.png';
import sideImg1 from '../../../assets/carousel/about-us-card1.png';
import sideImg2 from '../../../assets/carousel/about-us-card2.png';
import { Box, Stack, Typography } from '@mui/material';

import OrangeButton from '../../buttons/orangeButton';

function Bottom() {
    return (
        <div>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, overflow: 'hidden' }}>
                <Stack direction={{ xs: 'column-reverse', md: 'row' }} >
                    <Box
                        flex={1.2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                           


                            '.subject ': {
                                position: 'relative',
                                zIndex: 1
                            },

                            '.img-container': {
                                position: 'relative',
                            },
                            '.img1, .img2': {
                                position: 'absolute',
                                transition: '0.5s all',
                            },
                            '.img1': {
                                right: '100px',
                                top: '-50px',
                                zIndex: 0
                            },
                            '.img2': {
                                left: '-140px',
                                top: '-150px',
                                zIndex: 1

                            },
                            '.subject:hover + .img-container .img1': {
                                transform: 'translateX(20px)',
                            },
                            '.subject:hover + .img-container .img2': {
                                transform: 'translateY(20px)',
                            },
                        }}
                    >
                        <Box
                            className="background-shape"
                            style={{
                                position: 'absolute',
                                bottom: '-230px',
                                background: 'linear-gradient(186deg, rgba(255,139,0,0.4) 7%, rgba(255,255,255,0) 50%)',
                                width: '500px',
                                height: '500px',
                                borderRadius: '50%',
                                zIndex: 0,
                            }}
                        ></Box>

                        <img src={subject} className='subject' />
                        <div className="img-container">
                            <img src={sideImg1} className='img1' />
                            <img src={sideImg2} className='img2' />
                        </div>
                    </Box>

                    <Stack flex={1}
                        sx={{

                            display: 'flex',
                            justifyContent: 'center',
                            pl: { xs: 0, md: 10 },
                            py: { xs: 5, md: 0 }

                        }}>

                        <Typography variant='h3' sx={{ fontWeight: 600, fontFamily: 'Poppins', py: 2 }}>About Go and Relax Co.</Typography>
                        <Typography variant='h4' sx={{ fontFamily: 'Poppins', pb: 2, fontSize: '18px' }}>Gorex is your one-stop shop for all your automotive needs. We connect you with trusted merchants who offer a wide range of services, including tire replacement, tinting, car washing, repairs, oil change, and much more</Typography>
                        <OrangeButton input={'Learn more'} />

                    </Stack>
                </Stack>
            </Box>
        </div>
    );
}

export default Bottom;
