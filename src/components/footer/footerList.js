import styled from "@emotion/styled";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/base";

// Components
import footerItems from "./data";
import AppStore from "../reusable/applicationStore";
import { useTheme } from "@emotion/react";


const StyledButton = styled(Button)(({ fontWeight = 500 }) => {

    const theme = useTheme();

    return {
        color: 'white',
        fontSize: theme.breakpoints.down('sm') ? '14px' : '2px',
        fontWeight: fontWeight,
        textDecoration: 'none',

        '&:hover': {
            color: '#9da7c0',
            cursor: 'pointer',
        }
    };

});



function FooterList() {
    return (
        <>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={10}>
                {footerItems.map((item) => {
                    const sanitizedItem = item.title.replace(' ', '').toLowerCase();
                    return (
                        <Stack direction={'column'} gap={1} key={item.id} sx={{ px:2, textAlign:{xs:'center', sm:'left'} }} maxWidth={{ xs: '100%', sm: '250px' }}  >

                            {item.id === 1 ? (
                                <>
                                    <Link to={`/${sanitizedItem}`} style={{ textDecoration: 'none' }}>
                                        <StyledButton to={`/`} fontWeight={'600'}>{item.title}</StyledButton>
                                    </Link>

                                    {item.links.map((link, linkIndex) => {
                                        const sanitizedLink = link.replace(' ', '').toLowerCase();
                                        return (
                                            <Link to={`/${sanitizedLink}`} style={{ textDecoration: 'none' }}>
                                                <StyledButton to={`/`} key={linkIndex}>{link}</StyledButton>
                                            </Link>
                                        );
                                    })}
                                </>
                            ) : null}

                            {item.id === 2 ? (
                                <>
                                    <Link to={`/services`} style={{ textDecoration: 'none' }}>
                                        <StyledButton to={`/`} fontWeight={'600'}>{item.title}</StyledButton>
                                    </Link>

                                    {item.links.map((link, linkIndex) => {
                                        return (
                                            <Link to={`/services`} style={{ textDecoration: 'none' }}>
                                                <StyledButton to={`/`} key={linkIndex}>{link}</StyledButton>
                                            </Link>
                                        );
                                    })}
                                </>
                            ) : null}

                            {item.id === 3 ? (
                                <>
                                    <Typography variant="body1" fontWeight={'600'} sx={{ textAlign: { xs: 'center', sm: 'left' }, fontSize:{xs:'18px', sm:'14px'} }}>
                                        {item.title}
                                    </Typography>
                                    {item.links.map((link, linkIndex) => {
                                        return (
                                            <Typography variant="body1" sx={{ textAlign: { xs: 'center', sm: 'left' },fontSize:{xs:'16px', sm:'14px'} }}>
                                                {link}
                                            </Typography>
                                        );
                                    })}
                                </>
                            ) : null}
                        </Stack>
                    );
                })}

                {/* Display only below 600px */}
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center' }}>
                    <AppStore />
                </Box>
            </Stack>
        </>
    );
}

export default FooterList;
