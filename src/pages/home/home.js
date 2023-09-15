import React, { useContext } from 'react'
import { Box, Button, Container } from '@mui/material'

// Components
import Header from '../../components/home/header/header';
import Carousal from '../../components/home/carousal/carousal';

function Home() {
  return (
    <div>
        <Header />
        <Carousal />
    </div>
  )
}

export default Home
