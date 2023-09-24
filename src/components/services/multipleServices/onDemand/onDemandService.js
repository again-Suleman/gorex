import React from 'react'
import { useTheme } from '@emotion/react';
import { Box, Stack } from '@mui/system'
import { Typography, useMediaQuery } from '@mui/material';

// Icons
import logo from '../../../../assets/Services/multipleServices/gorex-on-demand-ic.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Components
import OrangeButton from '../../../buttons/orangeButton';
import { OnDemandServiceItems } from './onDemandData';
import { Link } from 'react-router-dom';

function OnDemandService() {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const midpoint = Math.ceil(OnDemandServiceItems.length / 2);

    const firstHalf = OnDemandServiceItems.slice(0, midpoint);
    const secondHalf = OnDemandServiceItems.slice(midpoint);

    return (
        <>
            <Stack direction={{ xs: 'column', md: 'row' }} >
                <Box flex={1.7} sx={{ p: 5, }}>
                    <Stack direction={'column'} gap={4}>

                        <Stack direction={'row'} gap={2} sx={{ alignItems: 'center', }}>
                            <img src={logo} style={{ height: '100%' }} />
                            <Typography variant='h5' sx={{ fontWeight: 600, }}>Gorex on Demand </Typography>
                        </Stack>

                        <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 10 }}>
                            {isSmallScreen ? (
                                <>
                                    {OnDemandServiceItems.map((item, index) => {
                                        return (
                                            <Stack direction={'row'} gap={2} key={index}>
                                                <CheckCircleIcon sx={{ color: 'white' }} />
                                                <Typography variant='h6' sx={{ color: 'white', fontWeight: 500 }}>{item}</Typography>
                                            </Stack>
                                        )
                                    })
                                    }
                                </>
                            ) : (
                                <>
                                    <Stack direction={'column'} gap={1}>
                                        {firstHalf.map((item, index) => {
                                            return (
                                                <Stack direction={'row'} gap={1} key={index}>
                                                    <CheckCircleIcon sx={{ color: 'white', fontSize: '1.5rem', mr: 1 }} />
                                                    <Typography variant='h6' sx={{ color: 'white', fontWeight: 500 }}>{item}</Typography>
                                                </Stack>
                                            )
                                        })}
                                    </Stack>
                                    <Stack direction={'column'} gap={1}>
                                        {secondHalf.map((item, index) => {
                                            return (
                                                <Stack direction={'row'} gap={1} key={index}>
                                                    <CheckCircleIcon sx={{ color: 'white', fontSize: '1.5rem', mr: 1 }} />
                                                    <Typography variant='h6' sx={{ color: 'white', fontWeight: 500 }}>{item}</Typography>
                                                </Stack>
                                            )
                                        })}
                                    </Stack>
                                </>
                            )}
                        </Stack>
                    </Stack>
                </Box>

                <Box flex={1} sx={{ bgcolor: `${theme.palette.orangeAccent.main}`, borderRadius: '20px', color: 'white', p: 5 }}>
                    <Stack direction={'column'}>
                        <Typography variant='h4' sx={{ fontWeight: 600, mt: 5, mb: 1 }}>Need Help with Gorex?</Typography>
                        <Typography variant='h6' sx={{ mb: 2, color: '#ffd094' }}>Our support team is here for you! Contact us anytime for assistance with anything.</Typography>
                        <Link to='/contactus'>
                            <OrangeButton input='Contact Us' outline={true} />
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default OnDemandService
