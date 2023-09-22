import React from 'react'
import { Stack, Chip, Typography } from '@mui/material'

// Icons
import img from '../../../assets/working/checkmark-features-ic.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

// Components
import AppStore from '../applicationStore';
import { Box } from '@mui/system';



function RightCard({ item }) {
    return (
        <>
            <Stack direction="row" spacing={1} sx={{ px: 2 }}>
                <Chip size='small' label="RIYADH" color="info" variant="outlined" icon={<LocationOnIcon />} />
                <Chip size='small' label="LIMITED-TIME OFFER" color="error" variant="outlined" icon={<AccessTimeFilledIcon />} />
            </Stack>

            {/* title */}
            <Typography variant="h1" sx={{ fontWeight: 600, fontSize: { xs: '36px', md: '48px' }, pl: 2, py: 2, pr: { xs: 2, md: 5, lg: 15 } }}>
                {item.title}
            </Typography>

            {/* subtitle */}
            {item.subtitle && (
                <Typography variant="h4" sx={{ pb: 1, fontWeight: 600, px:2 }}>
                    {item.subtitle}
                </Typography>
            )}

            <Stack direction={'column'} gap={2} sx={{ pt: 2, px: 2 }}>
                {item.description.map((value, index) => (
                    <Stack direction={'row'} gap={2} sx={{ alignItems: 'center' }}>
                        <img src={img} alt="" style={{ height: '100%', transform: 'scale(0.7)' }} />
                        <Typography key={index} variant="h5" sx={{ fontSize: { xs: '14px', md: '18px' }, color: '#8b8b8b' }}>
                            {value}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Stack gap={3} sx={{ pt: 5, pb: 10, px: 2 }}>
                <Typography variant='h4' sx={{ fontWeight: 600, fontSize: { xs: '20px', sm: '22px', md: '24px' }, textAlign: { xs: 'center', md: 'left' } }}>To claim the offer, download the app.  </Typography>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' } }}>

                    <AppStore />
                </Box>
            </Stack>

        </>
    )
}

export default RightCard
