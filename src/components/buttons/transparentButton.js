import React, { useEffect } from 'react'
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';

// Icons
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

function TransparentButton(props) {
    const theme = useTheme();

    useEffect(() => {
        AOS.init({ duration: "500", delay: "100", once: true });
      }, [])

    return (
        <div data-aos="flip-left">
            <Button
                startIcon={<QuestionAnswerIcon sx={{ color: 'linear-gradient(152deg, rgba(255,139,0,1) 26%, rgba(255,255,255,1) 90%)', fontSize: '16px' }} />}
                sx={{
                    backgroundColor: 'rgba(255, 139, 0, 0.1)',
                    borderRadius: '999px',
                    border: `1px solid ${theme.palette.orangeAccent.main}`, // Use border for outline
                    width: '100%',
                    maxWidth: '180px',
                    py: 1,
                    px: 3,
                    my: 1,
                    textTransform: 'none',
                    color: theme.palette.orangeAccent.main,
                    gap: 1,
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    transition: '0.3s all ease',
                    
                    '&:hover': {
                        bgcolor: 'white',
                        border: `1px solid ${theme.palette.orangeAccent.main}`,
                        color: 'black',
                        gap: 2,
                        transition: '0.3s all ease'
                    }
                }}
            >
                {props.input}
            </Button>
        </div>
    );
}

export default TransparentButton;
