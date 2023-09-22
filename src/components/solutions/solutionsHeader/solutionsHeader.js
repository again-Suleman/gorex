import React from 'react'
import WhiteTitle from '../../reusable/WhiteTitle'
import { Box, Stack } from '@mui/system'

// Components
import Sides from '../../reusable/Sides'
import SolutionsHeaderRight from './solutionsHeaderRight'

function SolutionsHeader() {
    return (
        <>
            <WhiteTitle title='Solutions' heading='Transform Your Business with Our Expertise.' />
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, py: 10 }}>
                <Stack direction={{ xs: 'column', md: 'row' }}>
                    <Box flex={1.3}>
                        <Sides
                            typo1={"At our core, we believe in empowering businesses like yours. That’s why we offer a range of powerful solutions designed to help you succeed. From advanced analytics to cutting-edge technology, our solutions are designed to give your business the competitive edge it needs to thrive in today’s fast-paced world."}
                            typo2={"We’re more than just a provider of essential business tools - we’re a partner committed to your success. Our underlying solutions are designed to empower you every step of the way."} />
                    </Box>

                    <Box flex={1}>
                        <SolutionsHeaderRight />
                    </Box>

                </Stack>
            </Box>
        </>
    )
}

export default SolutionsHeader
