import React from 'react'
import { Box, Stack } from '@mui/system'

// Components
import img from '../../../assets/Solutions/tracking/tracking-ic.png'
import OrangeButton from '../../buttons/orangeButton'
import Title from '../../reusable/Title'
import Sides from '../../reusable/Sides'


function Tracking() {
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 }, py: 10, bgcolor: '#fafafa' }}>
                <Stack direction={'row'} gap={{ xs: 0, sm: 5, }} sx={{display:'flex',alignItems:'center'}}>
                    <img src={img} alt="" style={{ height: '100%' }} />
                    <Title title={"TRACKING"} heading={"Rev Up Your Fleet Management."} fullWidth={true} />
                </Stack>

                <Stack direction={'column'} width={{ xs: '100%', md: '80%' }}>
                    <Sides
                        typo1={"Tracking is a regional-based Technology company focusing mainly on the Transport industry to equip them with all technological tools & equipment."}
                        typo2={"Global Tracking Solutions is our flagship brand available in IOS & Android Stores. Tracking is offering new-generation Fleet Tracking and Management Solutions with the concept of Global Products & Local Solutions. We are integrating the latest GPS and GSM/GPRS location-based technology, that is remotely configurable and upgradeable."}
                        typo3={"We have recently incorporated IOT Devices which will now offer many various forms of the latest tracking to our industry."}
                    />
                    <a href="https://tracking.me/" target="_blank" style={{ textDecoration: 'none' }}>
                        <OrangeButton input={'Visit Tracking'}  />
                    </a>
                </Stack>
            </Box>

        </>
    )
}

export default Tracking
