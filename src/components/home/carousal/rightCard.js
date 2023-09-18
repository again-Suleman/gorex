import React from 'react'
import { useTheme } from '@emotion/react';
import { Stack, Chip, List, Typography } from '@mui/material'

// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

// Components
import AppStore from '../../reusable/applicationStore';



function RightCard({ item }) {
    const theme = useTheme()
    return (
        <>
            <Stack direction="row" spacing={1}>
                <Chip size='small' label="RIYADH" color="info" variant="outlined" icon={<LocationOnIcon />} />
                <Chip size='small' label="LIMITED-TIME OFFER" color="error" variant="outlined" icon={<AccessTimeFilledIcon />} />
            </Stack>

            {/* title */}
            <Typography variant="h1" sx={{ fontWeight: 600, fontFamily: 'Poppins', fontSize: { xs: '36px', md: '48px' } }}>
                {item.title}
            </Typography>

            {/* subtitle */}
            {item.subtitle && (
                <Typography variant="h4" sx={{ pt: 3, pb: 1, fontWeight: 600,fontFamily: 'Poppins' }}>
                    {item.subtitle}
                </Typography>
            )}

            <List sx={{ pt: 2, px: 2 }}>
                {item.description.map((value, index) => (
                    <Typography key={index} variant="h5" component="li" sx={{fontFamily: 'Poppins', display: 'flex', alignItems: 'center', gap: 2, lineHeight: 2, fontSize: '18px', flexWrap: 'wrap' }}>
                        <CheckCircleIcon sx={{ color: theme.palette.orangeAccent.main }} />
                        {value}
                    </Typography>
                ))}
            </List>

            <Stack gap={3} sx={{ pt: 5, pb: 10 }}>
                <Typography variant='h4' fontWeight={600} fontFamily={'Poppins'}>To claim the offer, download the app.  </Typography>
                <AppStore />
            </Stack>

        </>
    )
}

export default RightCard
