import React, { useContext, useState } from 'react';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, useTheme, Menu, MenuItem, Avatar, Typography, Drawer } from '@mui/material';
import { ColorModContext } from '../../theme';
import navImg from './navlogo.png';
import styled from '@emotion/styled';

// Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Images
import usa from '../../assets/usa.jpeg'
import saudi from '../../assets/saudi.png'


const StyledContainer = styled(Box)({
    px: 200,
})

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',

})

const StyledButton = styled(Button)({
    color: 'white',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    textTransform: 'none',

    '&::before': {
        content: '""',
        display: "block",
        position: 'absolute',
        bottom: '2px',
        left: '1',
        width: "0%",
        height: "2px ",
        backgroundColor: "white",
        borderRadius: '10%',
        transition: '0.3s'
    },
    '&:hover::before': {
        display: 'block',
        width: '50%',
        transition: '0.3s',
    },

    '&:hover': {
        color: '#9da7c0',
        background: 'transparent'
    }

})

const ResponsiveMenuButton = styled(Button)({
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '14px',

})

function Navbar() {
    const colorMode = useContext(ColorModContext);
    const theme = useTheme()

    // Handing Drawer
    const [drawer, setDrawer] = useState(false)

    // For dropdown on nav
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleArrowDropDownClick = (event) => {
        setAnchorEl(event.currentTarget); 
        setOpen(true); 
    };

    const handleCloseMenu = () => {
        setAnchorEl(null); 
        setOpen(false); 
    };

    return (
        <Box >
            <AppBar position='sticky' sx={{ background: 'linear-gradient(90deg, rgba(54,35,128,1) 15%, rgba(73,204,147,1) 90%)', padding: '10px 0' }}>
                <Box sx={{ px: {xs: 2, sm:8, lg:17} }}>
                    <StyledToolbar>
                        {/* Resposive Icon */}
                        <IconButton sx={{ display: { md: 'block', lg: 'none' } }}>
                            <DarkModeIcon sx={{ color: 'white' }} onClick={colorMode.toggleColorMode}></DarkModeIcon>
                        </IconButton>

                        {/* default */}
                        <img src={navImg} alt="Logo" style={{ height: '25px' }} />
                        <Stack display={{ xs: 'none', lg: 'block' }} gap={0.5} direction={'row'}>
                            <StyledButton >Home</StyledButton>
                            <StyledButton >About Us</StyledButton>
                            <StyledButton >Patnerships</StyledButton>
                            <StyledButton >Services</StyledButton>
                            <StyledButton >Solutions</StyledButton>
                            <StyledButton >Offers</StyledButton>
                            <StyledButton >Contact Us</StyledButton>
                        </Stack>

                        <Stack display={{ xs: 'none', lg: 'block' }} direction={'row'} gap={1}>
                            <Button
                                sx={{ gap: 1, px: '10px', color: 'white', fontSize: '12px', border: '1px solid white', background: 'rgba(255,255,255,0.2)', borderRadius: '999px', textTransform: 'none', }}
                            > Login <ArrowForwardIcon sx={{ color: 'white', fontSize: '16px' }} />
                            </Button>

                            <IconButton>
                                <DarkModeIcon sx={{ color: 'white' }} onClick={colorMode.toggleColorMode}></DarkModeIcon>
                            </IconButton>
                            <ArrowDropDownIcon onClick={handleArrowDropDownClick}></ArrowDropDownIcon>
                        </Stack>

                        <Menu
                            id="demo-positioned-menu"
                            open={open}
                            onClose={handleCloseMenu}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}

                        >
                            <MenuItem sx={{ gap: 2 }}>
                                <Avatar >
                                    <img src={usa} width={50} />
                                </Avatar>
                                <Typography>English</Typography>
                            </MenuItem>
                            <MenuItem sx={{ gap: 2 }}>
                                <Avatar >
                                    <img src={saudi} width={50} />
                                </Avatar>
                                <Typography>Arabic</Typography>
                            </MenuItem>
                        </Menu>


                        {/* Responsive Menu */}
                        <Box sx={{ display: { md: 'block', lg: 'none' } }}>
                            <IconButton onClick={() => setDrawer(true)}>
                                <MenuIcon sx={{ color: 'white' }}></MenuIcon>
                            </IconButton>
                        </Box>

                        <Drawer
                            anchor='right'
                            open={drawer}
                            onClose={() => setDrawer(false)}
                            sx={{ bgcolor: 'rgba(54, 35, 128, 0.6)', }}>

                            <Stack direction={'column'} gap={1} justifyContent={'center'}
                                sx={{
                                    background: 'linear-gradient(45deg, rgba(54,35,128,1) 30%, rgba(0,0,0,1) 95%);',
                                    width: '300px',
                                    height: '100% '
                                }}
                            >

                                <ResponsiveMenuButton >Home</ResponsiveMenuButton>
                                <ResponsiveMenuButton >About Us</ResponsiveMenuButton>
                                <ResponsiveMenuButton >Patnerships</ResponsiveMenuButton>
                                <ResponsiveMenuButton >Services</ResponsiveMenuButton>
                                <ResponsiveMenuButton >Solutions</ResponsiveMenuButton>
                                <ResponsiveMenuButton >Offers</ResponsiveMenuButton>
                                <ResponsiveMenuButton >Contact Us</ResponsiveMenuButton>
                            </Stack>

                        </Drawer>

                    </StyledToolbar>
                </Box>
            </AppBar>
        </Box>
    );
}

export default Navbar;
