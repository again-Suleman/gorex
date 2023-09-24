import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';



function Title({ heading, title, white, sideWhite, fullWidth }) {

    const theme = useTheme()

    // Some Customized things
    let width = fullWidth ? '100%' : '60%'
    const color = white ? 'white' : `${theme.palette.orangeAccent.main}`
    const colorH = white ? 'white' : 'black'
    const colorS = sideWhite ? 'white' : `${theme.palette.orangeAccent.main}`

    useEffect(() => {
        AOS.init({ duration: "500", delay: "100", once: true });
    }, [])

    return (
        <div data-aos="fade-down">
            <Box sx={{ px: { xs: 2, sm: 0 } }}>
                <Typography variant='h3'
                    sx={{
                        fontSize: { xs: '14px', sm: '16px', md: '20px' },
                        fontWeight: 600,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        letterSpacing: 1,
                        my: 1,
                        color: color,

                        '&::before': {
                            content: '""',
                            display: "block",
                            width: "25px",
                            height: "5px",
                            mr: 2,
                            backgroundColor: colorS,
                            borderRadius: '10%',
                            transition: '0.3s all ease-in-out'
                        },

                    }}>
                    {title.toUpperCase()}
                </Typography>

                <Typography variant='h1'
                    sx={{
                        color: colorH,
                        fontSize: { xs: '22px', sm: '32px', md: '48px' },
                        fontWeight: 600,
                        width: { xs: '100%', md: width, },
                    }}>
                    {heading}
                </Typography>
            </Box>
        </div>
    )
}

export default Title
