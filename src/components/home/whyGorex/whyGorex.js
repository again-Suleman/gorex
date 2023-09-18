import { Box, Grid } from '@mui/material';
import React from 'react';
import Title from '../../reusable/Title';

// Data
import { Items } from './data';

// Component
import WhyGorexList from './whyGorexList';

function WhyGorex() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }}}>
                <Title title='Why Gorex' heading='The Ultimate Automotive Services Marketplace.' />
                <Box>
                    <Grid container sx={{ my: 10, }}>
                        {Items.map((item) => (
                            <WhyGorexList key={item.id} item={item} />
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default WhyGorex;
