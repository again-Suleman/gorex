import React from 'react';
import { Box, Stack} from '@mui/material';

// Components
import LeftCard from './leftCard';
import RightCard from './rightCard';

function Cards({ item }) {
    return (
        <Box sx={{ mx: { xs: 2, sm: 5, md: 8, lg: 11 }, fontFamily: 'Poppins' }}>
            <Stack direction={{ xs: 'column-reverse', lg: 'row' }} sx={{}}>
                {/* Left Card */}
                <Box flex={1} >
                    <LeftCard item={item} />

                </Box>

                {/* Right Card  */}
                <Stack direction={'column'} gap={1} flex={1} sx={{ fontFamily: 'Poppins'}}>
                    <RightCard item={item} />
                </Stack>
            </Stack>
        </Box >
    );
}

export default Cards;
