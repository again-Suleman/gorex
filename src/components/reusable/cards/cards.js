import React from 'react';
import { Box, Stack } from '@mui/material';

// Components
import LeftCard from './leftCard';
import RightCard from './rightCard';

function Cards({ item, inverse }) {
    return (
        <>
            {inverse && item.id % 2 === 0 ? (
                <Box sx={{ px: { xs: 1.4, sm: 5, md: 8, lg: 11 }, py: 10, bgcolor: '#fafafa' }}>
                    <Stack direction={{ xs: 'column-reverse', md: 'row-reverse' }}>
                        {/* Left Card */}
                        <Box flex={1} >
                            <LeftCard item={item} />
                        </Box>

                        {/* Right Card  */}
                        <Stack direction={'column'} flex={1} >
                            <RightCard item={item} />
                        </Stack>
                    </Stack>
                </Box>
            ) : (
                <Box sx={{ px: { xs: 1.4, sm: 5, md: 8, lg: 11 }, py: 10 }}>
                    <Stack direction={{ xs: 'column-reverse', md: 'row' }} >
                        {/* Left Card */}
                        <Box flex={1}>
                            <LeftCard item={item} />
                        </Box>

                        {/* Right Card  */}
                        <Stack direction={'column'} flex={1} >
                            <RightCard item={item} />
                        </Stack>
                    </Stack>
                </Box>
            )}
        </>
    );
}

export default Cards;
