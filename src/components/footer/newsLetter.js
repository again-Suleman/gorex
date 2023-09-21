import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Stack } from '@mui/system';

function NewsLetter() {

    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailPattern.test(enteredEmail));
    };

    const handleSubscribe = () => {
        if (isValidEmail) {
            console.log('Subscribed with email:', email);

            // Store email in local storage
            const storedEmail = localStorage.getItem('subscribedEmail');
            if (storedEmail) {
                console.log('Stored email:', storedEmail);
            } else {
                console.log('No email stored in local storage.');
            }
        }
    };

    return (
        <Stack direction={'column'} sx={{ background: 'linear-gradient(45deg, rgba(54,35,128,1) 5%, rgba(0,0,0,1) 90%)', color: 'white', borderRadius: '30px', p: 5, }}>

            {/* text */}
            <Stack direction={'column'}>
                <Typography variant="h5" sx={{ fontWeight: 600, pb: 1, fontSize: { xs: '16px', md: '18px' } }}>
                    Subscribe to our newsletter
                </Typography>
                <Typography variant="h6" sx={{ fontSize: { xs: '14px', md: '14px' } }}>
                    Get exclusive access to promotions, updates, and automotive industry insights delivered straight to your inbox.
                </Typography>

            </Stack>


            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    pt: 3,
                }}>

                <TextField
                    id="email-input"
                    label="Email Address..."
                    variant="standard"
                    fullWidth
                    size="small"
                    sx={{
                        mr: 1,
                        background: 'white',
                        borderRadius: '10px',
                    }}
                    onChange={handleEmailChange}
                    error={!isValidEmail}
                    helperText={!isValidEmail ? 'Invalid email address' : ''}/>
                <Button
                    variant="contained"
                    color="orangeAccent"
                    onClick={handleSubscribe}
                    sx={{
                        height: '100%',
                    }}
                    >
                    Subscribe
                </Button>
            </Box>
        </Stack>
    );
}

export default NewsLetter;
