import { Box, Stack } from '@mui/system'
import React from 'react'

// Data
import { ModulesData } from './modulesData'

// Components
import Title from '../../reusable/Title'
import CustomGrid from '../../reusable/customGrid/CustomGrid'
import ModulesRightSection from './modulesRightSection'

function Modules() {
    return (
        <>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 11 }, pt: 15, pb: 3, overflow: 'hidden' }}>
                <Stack direction={{ xs: 'column', lg: 'row' }}>
                    <Box flex={1.2} sx={{}}>
                        <Title title="MODULES" heading="The All-In-One Solution." />
                        <Box>
                            <CustomGrid Items={ModulesData} md={6} lg={6} />
                        </Box>
                    </Box>
                    <Box flex={1} sx={{ pl: { xs: 0, md: 5 } }}>
                        <ModulesRightSection />
                    </Box>
                </Stack>
            </Box>

        </>
    )
}

export default Modules
