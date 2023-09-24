import React, { useEffect } from 'react'
import { workingItems } from './data'
import { Box, Stack, Typography } from '@mui/material'

//components
import Title from '../../reusable/Title'
import WorkingList from './workingList'
import WorkingBottom from './Bottom part/workingBottom'

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';



const styleBox1 = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    mb: 1,


    '&::before': {
        content: '""',
        display: "block",
        width: "15px",
        height: "340px",
        mx: { xs: 3, sm: 5, md: 8 },
        background: 'linear-gradient(0deg, rgba(255,139,0,1) 5%, rgba(255,255,255,0) 90%)',
        // borderRadius: '10%',
        transition: '0.3s all ease-in-out'
    },
}



function Working() {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "400", once: true });
    }, [])

    return (
        <>
            <Box sx={{ py: 15 }}>
                <Stack direction={'column'} sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 } }}>
                    <Box sx={styleBox1}>
                        <Box>
                            <Title title='HOW GOREX WORKS' heading='The Ultimate Destination for Auto Services and Repairs' />
                            <div data-aos="fade-down">
                                <Typography variant='h3' sx={{ width: { xs: '100%', md: '80%' }, px: { xs: 1, sm: 0 }, py: 4, pb: { xs: 2, sm: 8 }, color: '#8b8b8b', fontSize: { xs: '14px', sm: '16px', md: '20px' } }}>With the Gorex app, booking automotive services is now easier and more convenient than ever. customers can choose from a wide range of services and products from trusted service providers, and the Gorex app ensures a hassle-free booking process</Typography>
                            </div>
                        </Box>
                    </Box>

                    {workingItems.map((item) => (
                        <Box key={item.id}>
                            <WorkingList item={item} />
                        </Box>
                    ))}


                </Stack>

                <Stack sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, mt: 15, background: 'linear-gradient(90deg, rgba(54,35,128,1) 15%, rgba(73,204,147,1) 90%)', overflow: 'hidden' }}>
                    <WorkingBottom />
                </Stack>
            </Box>
        </>
    )
}

export default Working
