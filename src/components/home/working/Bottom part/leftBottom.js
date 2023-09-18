import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import AppStore from '../../../reusable/applicationStore';


function LeftBottom() {
    return (
        <div>
            <Box>
                <Stack direction={'column'} sx={{ color: 'white', px: { xs: 1, md: 5 }, py: 2 }}>
                    <Typography variant='h3' sx={{ fontSize: { xs: '22px', md: '28px' }, fontWeight: 600, width: { xs: '100%', md: '75%' } }}>
                        Rev up your automotive experience with Gorex!
                    </Typography>
                    <Typography variant='h5' sx={{ fontSize: { xs: '14px', md: '18px' }, mb: 5, mt: 2, width: { xs: '100%', md: '70%' }, letterSpacing: 1 }}>
                        Download the Gorex app now and start driving with confidence.
                    </Typography>
                    <AppStore />
                </Stack>
            </Box>
        </div>
    );
}

export default LeftBottom;
