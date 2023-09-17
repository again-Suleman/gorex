import React, { useContext } from 'react'
import { Box, Button, Container } from '@mui/material'

// Components
import Header from '../../components/home/header/header';
import Carousal from '../../components/home/carousal/carousal';
import Working from '../../components/home/working/working';

function Home() {
  return (
    <div>
        <Header />
        <Carousal />
        <Working />
    </div>
  )
}

export default Home
