import React from 'react'
import { Box } from '@mui/material'

// Components
import Title from '../../reusable/Title'
import Sides from '../../reusable/Sides'


function Mision() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10 }}>
                <Title title="Our Mision" white={true} sideWhite={true} />
                <Sides
                    typo1={"Go and Relax Co’s mission is to provide easy access to high-quality automotive services through a dependable online platform."}
                    typo2={"We prioritize convenience, transparency, and trust, creating a seamless experience for customers scheduling routine maintenance or complex repairs."}
                    typo3={"Our goal is to make top-quality automotive services accessible to everyone, regardless of location or background, through innovation and partnerships."}
                    white={true}
                />
            </Box>

        </>
    )
}

export default Mision
