import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import OrangeButton from '../buttons/orangeButton'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 250, sm: 400 },
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: { xs: 3, sm: 5 },
};

function RightContactSection() {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [nameHelper, setNameHelper] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [numberHelper, setNumberHelper] = useState('');

    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length >= 3 && email.length >= 10 && number.length >= 10) {
            if (name.length <= 15 && email.length <= 30 && number.length <= 15) {
                setOpen(true);

                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('number', number);
                localStorage.setItem('message', message);

                setName('');
                setEmail('');
                setNumber('');
                setMessage('');
            }
        }
    };

    const handleName = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setName(value);

        if (value.length < 3) {
            setNameHelper('Name must be at least 3 characters long');
        } else if (value.length > 15) {
            setNameHelper('Name must be less than 15 characters long');
        } else {
            setNameHelper('');
        }
    };

    const handleEmail = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setEmail(value);

        if (value.length < 10) {
            setEmailHelper('Email must be at least 10 characters long');
        } else if (value.length > 30) {
            setEmailHelper('Email must be less than 30 characters long');
        } else {
            setEmailHelper('');
        }
    };

    const handlePhoneNumber = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setNumber(value);

        if (value.length < 10) {
            setNumberHelper('Number must be at least 10 characters long');
        } else if (value.length > 15) {
            setNumberHelper('Number must be less than 15 characters long');
        } else {
            setNumberHelper('');
        }
    };

    return (
        <Box sx={{ py: { xs: 2, sm: 15, md: 15 } }}>
            <form onSubmit={handleSubmit}>
                <Stack gap={{xs:3,sm:4}}>
                    <Stack direction={{xs:'column', sm:'row'}} gap={{xs:3,sm:2}}>
                        <TextField id="name" label="Full Name" variant="outlined" fullWidth required value={name} onChange={handleName} helperText={nameHelper} error={Boolean(nameHelper)} />
                        <TextField id="email" label="Email" variant="outlined" type='email' fullWidth required value={email} onChange={handleEmail} helperText={emailHelper} error={Boolean(emailHelper)} />
                    </Stack>
                    <TextField id="phoneNumber" label="Phone Number" variant="outlined" type='number' required value={number} onChange={handlePhoneNumber} helperText={numberHelper} error={Boolean(numberHelper)} />
                    <TextField
                        id="message"
                        label="Your Message"
                        multiline
                        required
                        rows={6}
                        placeholder='Write your message here...'
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            if (message.length > 700) {
                                setMessage(message.slice(0, 500));
                            }
                        }}
                    />
                    <OrangeButton input='Submit' fullWidth type='submit' />
                </Stack>
            </form>
            <Modal open={open} onClose={handleClose}>
                <Stack gap={2} sx={style}>
                    <Typography id="modal-modal-title" variant="h4" sx={{ fontWeight: 600, pt: 1 }}>
                        Form is Submitted Successfully!
                    </Typography>
                    <Typography variant='h6'>
                        Our Team will contact you shortly.
                    </Typography>
                    <Button variant='contained' color='orangeAccent' sx={{ color: 'white' }} onClick={() => { setOpen(false) }}>I'll Wait :)</Button>
                </Stack>
            </Modal>
        </Box>
    );
}

export default RightContactSection;
