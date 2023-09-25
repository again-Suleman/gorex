import React, { useContext, useState } from 'react';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, useTheme, Menu, MenuItem, Avatar, Typography, Drawer } from '@mui/material';
import { ColorModContext } from '../../theme';
import styled from '@emotion/styled';

// Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Images
import navImg from '../../assets/navbar/navlogo.png';
import usa from '../../assets/navbar/usa.jpeg'
import saudi from '../../assets/navbar/saudi.png'
import { Link } from 'react-router-dom';


const StyledContainer = styled(Box)({
    px: 200,
})

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',

})

const StyledButton = styled(Button)(({ responsive }) => ({
    color: 'white',
    fontSize: responsive ? '14px' : '14px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    textTransform: 'none',

    ...(responsive
        ? {
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
                width: '25%',
                transition: '0.3s',
            },

            '&:hover': {
                color: '#9da7c0',
                background: 'transparent'

            }
        } : {
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
        }
    )



}))



function Navbar() {
    const colorMode = useContext(ColorModContext);

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


    // Nav Item lol xd 
    const navItems = [
        'Home',
        'About Us',
        'Partnerships',
        'Services',
        'Solutions',
        'Offers',
        'Contact Us',
    ];

    // Nav Items
    const navButtons = navItems.map((item, index) => {
        const sanitizedItem = item.replace(' ', '').toLowerCase();
        console.log(sanitizedItem)

        return item === 'Home' ? (
            <StyledButton key={index} component={Link} to={`/`}>{item}</StyledButton>
        ) : (
            <StyledButton key={index} component={Link} to={`/${sanitizedItem}`}>{item}</StyledButton>
        );

    })

    // For responsive
    const navResponsiveButtons = navItems.map((item, index) => {
        const sanitizedItem = item.replace(' ', '').toLowerCase();
        return item === 'Home' ? (
            <StyledButton key={index} component={Link} to={`/`} responsive={true}>{item}</StyledButton>
        ) : (
            <StyledButton key={index} component={Link} to={`/${sanitizedItem}`} responsive={true}>{item}</StyledButton>
        );

    })

    return (
        <Box >
            <AppBar position='fixed' sx={{ background: 'linear-gradient(90deg, rgba(54,35,128,1) 15%, rgba(73,204,147,1) 90%)', padding: '10px 0', transition: '0.3s all', boxShadow: 'none' }}>
                <Box sx={{ px: { xs: 2, sm: 5, md: 8, lg: 11 } }}>
                    <StyledToolbar>

                        {/* Resposive Icon */}
                        <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
                            <DarkModeIcon sx={{ color: 'white' }} onClick={colorMode.toggleColorMode}></DarkModeIcon>
                        </IconButton>

                        {/* default */}
                        <Link to='/'>
                            <img src={navImg} alt="Logo" style={{ height: '26px' }} />
                        </Link>
                        <Stack display={{ xs: 'none', md: 'block' }} gap={0.5} direction={'row'}>
                            {navButtons}
                        </Stack>

                        <Stack display={{ xs: 'none', md: 'block' }} direction={'row'} gap={1}>
                            <a href="https://partner.gorex.ai/web/database/login" target="_blank" >
                                <Button
                                    sx={{ gap: 1, px: '15px', color: 'white', fontSize: '12px', border: '1px solid white', background: 'rgba(255,255,255,0.2)', borderRadius: '999px', textTransform: 'none', }}
                                > Login <ArrowForwardIcon sx={{ color: 'white', fontSize: '16px' }} />
                                </Button>
                            </a>

                            <IconButton>
                                <DarkModeIcon sx={{ color: 'white' }} onClick={colorMode.toggleColorMode}></DarkModeIcon>
                            </IconButton>
                            <ArrowDropDownIcon onClick={handleArrowDropDownClick}></ArrowDropDownIcon>
                        </Stack>

                        {/* dropdown */}
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
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton onClick={() => setDrawer(true)}>
                                <MenuIcon sx={{ color: 'white' }}></MenuIcon>
                            </IconButton>
                        </Box>

                        {/* Drawer Functionality */}
                        <Drawer
                            anchor='right'
                            open={drawer}
                            onClose={() => setDrawer(false)}
                            sx={{ bgcolor: 'rgba(54, 35, 128, 0.6)', }}>

                            <Stack direction={'column'} gap={1} justifyContent={'center'}
                                sx={{
                                    background: 'linear-gradient(45deg, rgba(54,35,128,1) 5%, rgba(0,0,0,1) 90%)',
                                    width: { xs: 180, sm: 250, md: 300 },
                                    height: '100% ',
                                    transition: '0.3s all'
                                }}>

                                {/* defined up  */}
                                {navResponsiveButtons}
                            </Stack>

                        </Drawer>

                    </StyledToolbar>
                </Box>
            </AppBar>
        </Box>
    );
}

export default Navbar;
