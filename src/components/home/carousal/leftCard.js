import React from 'react'
import { Stack, Chip, List, Typography } from '@mui/material'

// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

// Assests
import appStore from '../../../assets/header/desktop-appstore.png'
import playStore from '../../../assets/header/desktop-play.png'
import { useTheme } from '@emotion/react';



function LeftCard({ item }) {
    const theme = useTheme()
    return (
        <>
            <Stack direction="row" spacing={1}>
                <Chip size='small' label="RIYADH" color="info" variant="outlined" icon={<LocationOnIcon />} />
                <Chip size='small' label="LIMITED-TIME OFFER" color="error" variant="outlined" icon={<AccessTimeFilledIcon />} />
            </Stack>

            {/* title */}
            <Typography variant="h1" sx={{ fontWeight: 600, fontSize: { xs: '36px', md: '48px' } }}>
                {item.title}
            </Typography>

            {/* subtitle */}
            {item.subtitle && (
                <Typography variant="h4" sx={{ pt: 3, pb: 1, fontWeight: 600 }}>
                    {item.subtitle}
                </Typography>
            )}

            <List sx={{ pt: 2, px: 2 }}>
                {item.description.map((value, index) => (
                    <Typography key={index} variant="h5" component="li" sx={{ display: 'flex', alignItems: 'center', gap: 2, lineHeight: 1.6, fontSize: '18px', flexWrap: 'wrap' }}>
                        <CheckCircleIcon sx={{ color: theme.palette.orangeAccent.main }} />
                        {value}
                    </Typography>
                ))}
            </List>

            <Stack gap={3} sx={{ pt: 5, pb: 10 }}>
                <Typography variant='h4' fontWeight={600}>To claim the offer, download the app.  </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} >
                    <a href="https://apps.apple.com/pk/app/gorex-customer/id1633313842" target="_blank" rel="noopener noreferrer">
                        <img src={appStore} alt="App Store" />
                    </a>

                    <a href="https://play.google.com/store/apps/details?id=com.gorexcustomer&pli=1" target="_blank" rel="noopener noreferrer">
                        <img src={playStore} alt="Play Store" />
                    </a>
                </Stack>
            </Stack>

        </>
    )
}

export default LeftCard
