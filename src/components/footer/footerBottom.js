import React from 'react'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

// imgs
import img from '../../assets/navbar/navlogo.png'

// Icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@emotion/react';

function FooterBottom() {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    my: 3,
                }}>
                <Box>
                    <img src={img} />
                </Box>
                <Typography>© 2023 - Gorex, All Rights Reserved. | Privacy Policy</Typography>
                <Stack direction={'row'} gap={2} sx={{ color: '#8b8b8b' }}>
                    <a href="https://twitter.com/gorex_sa" target="_blank" style={{ color: '#8b8b8b' }}>
                        <TwitterIcon sx={{ transition: '0.3s all', fontSize: 25, '&:hover ': { color: `${theme.palette.orangeAccent.main}`, transition: '0.3s all' } }} />
                    </a>
                    <a href="https://www.facebook.com/gorexsa" target="_blank" style={{ color: '#8b8b8b' }}>
                        <FacebookIcon sx={{ transition: '0.3s all', fontSize: 25, '&:hover ': { color: `${theme.palette.orangeAccent.main}`, transition: '0.3s all' } }} />
                    </a>
                    <a href="https://www.instagram.com/gorex_sa/?igshid=OGQ2MjdiOTE%3D" target="_blank" style={{ color: '#8b8b8b' }}>
                        <InstagramIcon sx={{ transition: '0.3s all', fontSize: 25, '&:hover ': { color: `${theme.palette.orangeAccent.main}`, transition: '0.3s all' } }} />
                    </a>
                    <a href="https://www.linkedin.com/company/gorexsa/" target="_blank" style={{ color: '#8b8b8b' }}>
                        <LinkedInIcon sx={{ transition: '0.3s all', fontSize: 25, '&:hover ': { color: `${theme.palette.orangeAccent.main}`, transition: '0.3s all' } }} />
                    </a>
                </Stack>
            </Box>

        </>
    )
}

export default FooterBottom
