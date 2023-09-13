import React, { useContext } from 'react'
import { Box, Button, Container } from '@mui/material'
import { useTheme } from '@emotion/react'
import { ColorModContext, tokens } from '../../theme';
import Navbar from '../../components/navbar/navbar';

function Home() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const coloMode = useContext(ColorModContext)

  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Home
