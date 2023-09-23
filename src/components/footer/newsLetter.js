import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Modal } from '@mui/material';

// Components
import OrangeButton from '../buttons/orangeButton';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 250, sm: 400 },
    textAlign: 'center',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: { xs: 3, sm: 5 },

};


function NewsLetter() {

    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)

    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(true)
        localStorage.setItem('Newsletter email: ', email)
        setEmail('')
    }

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
                    width: '100%',
                    pt: 3,
                }}>

                <form onSubmit={handleSubmit}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} gap={{ xs: 2, sm: 1 }}
                        sx={{ width: '100%' }}>

                        <Box flex={2}>
                            <TextField
                                id="email-input"
                                variant="outlined"
                                fullWidth
                                required
                                type='email'
                                value={email}
                                onChange={handleEmail}
                                placeholder="Email Address..."
                                sx={{
                                    mr: 1,

                                    background: 'white',
                                    borderRadius: '10px',
                                }} />
                        </Box>
                        <OrangeButton input='Subscribe' type='submit' boxShape={true} fullHeight={true} margin={true} fullWidth={{ xs: true, sm: false }} />
                    </Stack>
                </form>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}>
                <Stack gap={2} sx={style}>
                    <Typography id="modal-modal-title" variant="h4" sx={{ fontWeight: 600, pt: 1, }}>
                        Welcome to the family!
                    </Typography>
                    <Typography variant='h6'>
                        Love to have you onboard.
                    </Typography>
                    <Box>
                        <Button variant='contained' color='orangeAccent' sx={{ color: 'white' }} onClick={() => { setOpen(false) }} >It's better Worth it</Button>
                    </Box>
                </Stack>

            </Modal>
        </Stack>
    );
}

export default NewsLetter;
