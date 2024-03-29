import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import { useTheme } from '@emotion/react'

// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

function OrangeButton({ boxShape, outline, input, type = 'none', fullWidth, fullHeight, margin }) {
  const theme = useTheme()
  const box = boxShape ? '10px' : '999px'
  const border = outline ? `1px solid white` : 'none'

  useEffect(() => {
    AOS.init({ duration: "500", delay: "100", once: true });
  }, [])

  return (
    <div data-aos="flip-left">
      <Button
        type={type}
        endIcon={<ArrowForwardIcon sx={{ fontSize: '16px' }} />}
        sx={{
          backgroundColor: theme.palette.orangeAccent.main,
          borderRadius: box,
          border: `1px solid ${theme.palette.orangeAccent.main}`,
          outline: border,
          width: '100%',
          height: fullHeight ? '100%' : 'auto',
          maxWidth: fullWidth ? '100%' : { xs: '150px', sm: '180px' },
          py: 1,
          px: 2,
          my: margin ? 0 : 1,
          textTransform: 'none',
          color: 'white',
          gap: 1,
          fontSize: { xs: '12px', sm: '14px' },
          fontFamily: 'Poppins',
          fontWeight: 600,
          transition: '0.3s all ease',

          '&:hover': {
            bgcolor: 'white',
            border: `1px solid ${theme.palette.orangeAccent.main}`,
            color: theme.palette.orangeAccent.main,
            gap: 2,
            transition: '0.3s all ease'
          }


        }}>{input} </Button>

    </div>
  )
}

export default OrangeButton
