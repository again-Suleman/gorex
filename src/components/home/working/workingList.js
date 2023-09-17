import { useTheme } from '@emotion/react';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

// img
import checkbox from '../../../assets/working/checkmark-features-ic.png';


function WorkingList({ item }) {
    const theme = useTheme();

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    position: 'relative',
                    my: 1, // space between cards
                }}>

                {item.completed ? (
                    <Stack sx={{ px: { xs: 0, sm: 3, md: 6 }, }}>
                        <img src={checkbox} alt="Icon" />
                    </Stack>
                ) : (
                    <Stack sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: { xs: 1, sm: 3, md: 6 },



                        '&::after': {
                            content: '""',
                            display: 'block',
                            width: '5px',
                            height: '140px',
                            mt: 2,
                            background: `${theme.palette.orangeAccent.main}`,

                        },
                    }}>
                        <img src={checkbox} alt="Icon" />
                    </Stack>)}



                {/* Content */}
                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Box sx={{ px: { xs: 1, sm: 3, md: 5 }, }}>
                        <img src={item.img} alt={item.title} />
                    </Box>
                    <Stack direction={'column'} >
                        <Typography variant='h3' sx={{ fontWeight: 600, fontSize: { xs: '18px', md: '24px' }, fontFamily: 'Poppins', pb: 1, width: { xs: '100%', sm: '70%', md: '60%', } }}>
                            {item.title}
                        </Typography>
                        <Typography variant='h4' sx={{ fontFamily: 'Poppins', fontSize: { xs: '12px', sm: '16px', md: '18px' }, width: { xs: '100%', sm: '85%', md: '75%', } }}>
                            {item.text}
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </div >
    );
}

export default WorkingList;