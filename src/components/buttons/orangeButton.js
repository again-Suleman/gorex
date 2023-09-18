import React from 'react'
import { Button } from '@mui/material'
import { useTheme } from '@emotion/react'


// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function OrangeButton(props) {
  const theme = useTheme()
  return (
    <div>
      <Button endIcon={<ArrowForwardIcon sx={{ fontSize: '16px' }} />}
        sx={{
          backgroundColor: theme.palette.orangeAccent.main,
          borderRadius: '999px',
          border: `1px solid ${theme.palette.orangeAccent.main}`,
          width: '100%',
          maxWidth: '160px',
          py: 1,
          px: 1,
          m: 1,
          textTransform: 'none',
          color: 'white',
          outline: '1px solid white',
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

        }}>{props.input} </Button>

    </div>
  )
}

export default OrangeButton
