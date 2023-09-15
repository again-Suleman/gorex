import { Box } from '@mui/system'
import React from 'react'

function RightCard({ item }) {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& img': {
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }

                }}>
                <img src={item.image} alt={item.title} />
            </Box>

        </div>
    )
}

export default RightCard
