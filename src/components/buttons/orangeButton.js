import React from 'react'
import { Button } from '@mui/material'
import { useTheme } from '@emotion/react'


// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function OrangeButton({ boxShape, outline, input }) {
  const theme = useTheme()
  const box = boxShape ? '10px' : '999px'
  const border = outline ? `1px solid white` : 'none'

  return (
    <div>
      <Button endIcon={<ArrowForwardIcon sx={{ fontSize: '16px' }} />}
        sx={{
          backgroundColor: theme.palette.orangeAccent.main,
          borderRadius: box,
          border: `1px solid ${theme.palette.orangeAccent.main}`,
          outline: border,
          width: '100%',
          maxWidth: '160px',
          py: 1,
          px: 2,
          my: 1,
          textTransform: 'none',
          color: 'white',
          gap: 1,
          fontSize: '14px',
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
