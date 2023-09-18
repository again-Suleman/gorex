import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'


function Title({ heading, title }) {
    const theme = useTheme()
    return (
        <div>
            <Box px={0}>
                <Typography variant='h3'
                    sx={{
                        fontSize: { xs: '14px', sm: '16px', md: '20px' },
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        letterSpacing: 1,
                        my: 1,
                        color: theme.palette.orangeAccent.main,

                        '&::before': {
                            content: '""',
                            display: "block",
                            width: "25px",
                            height: "5px",
                            mr: 2,
                            backgroundColor: `${theme.palette.orangeAccent.main}`,
                            borderRadius: '10%',
                            transition: '0.3s all ease-in-out'
                        },

                    }}>
                    {title.toUpperCase()}
                </Typography>

                <Typography variant='h1'
                    sx={{
                        fontSize: { xs: '20px', sm: '32px', md: '48px' },
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        width: { xs: '100', md: '60%', },
                    }}>

                    {heading}
                </Typography>
            </Box>
        </div>
    )
}

export default Title
