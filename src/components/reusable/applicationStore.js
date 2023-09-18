import { Stack } from '@mui/material'
import React from 'react'
import { useMediaQuery } from '@mui/material';

// imgs
import appStore from '../../assets/store/desktop-appstore.png';
import playStore from '../../assets/store/desktop-play.png';
import mobileAppStore from '../../assets/store/mobile-appstore.png';
import mobilePlayStore from '../../assets/store/mobile-play.png';



function AppStore() {
    const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <div>
            <Stack direction={{ xs: 'row', sm: 'row' }} gap={2}>
                {isSmScreen ? (
                    <>
                        <a href="https://apps.apple.com/pk/app/gorex-customer/id1633313842" target="_blank" rel="noopener noreferrer">
                            <img src={mobileAppStore} alt="Mobile App Store" />
                        </a>

                        <a href="https://play.google.com/store/apps/details?id=com.gorexcustomer&pli=1" target="_blank" rel="noopener noreferrer">
                            <img src={mobilePlayStore} alt="Mobile Play Store" />
                        </a>
                    </>
                ) : (
                    <>
                        <a href="https://apps.apple.com/pk/app/gorex-customer/id1633313842" target="_blank" rel="noopener noreferrer">
                            <img src={appStore} alt="App Store" />
                        </a>

                        <a href="https://play.google.com/store/apps/details?id=com.gorexcustomer&pli=1" target="_blank" rel="noopener noreferrer">
                            <img src={playStore} alt="Play Store" />
                        </a>
                    </>
                )}
            </Stack>
        </div>
    );
}


export default AppStore
