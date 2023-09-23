import React from 'react'
import { Box } from '@mui/material'

// Components
import Title from './Title'

function WhiteTitle({ title, heading, fullWidth }) {
    return (
        <>
            <Box sx={{
                background: 'linear-gradient(90deg, rgba(54,35,128,1) 15%, rgba(73,204,147,1) 90%)',
                minHeight: { xs: '50vh', sm: '50vh', md: '45vh' },
                width: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                py: { xs: 3, md: 5 },
            }}>
                <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, }}>
                    <Title white={true} title={title} heading={heading} fullWidth={fullWidth}/>
                </Box>
            </Box>

        </>
    )
}

export default WhiteTitle
