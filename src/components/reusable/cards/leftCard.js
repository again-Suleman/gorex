import { Box } from '@mui/system'
import React from 'react'

function LeftCard({ item }) {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    px: 2,
                    minHeight: { md: '100%', lg: '70vh' },
                    height: '100%',
                    
                    '& img': {
                        height: '100%',
                        width: '100%',
                    }

                }}>
                <img src={item.image} alt={item.title} />
            </Box>
        </div>
    )
}

export default LeftCard
