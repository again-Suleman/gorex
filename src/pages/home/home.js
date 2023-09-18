import React, { useContext } from 'react'
import { Box, Button, Container } from '@mui/material'

// Components
import Header from '../../components/home/header/header';
import Carousal from '../../components/home/carousal/carousal';
import Working from '../../components/home/working/working';
import WhyGorex from '../../components/home/whyGorex/whyGorex';
import Demand from '../../components/home/gorexDemand/demand';

function Home() {
  return (
    <div>
        <Header />
        <Carousal />
        <Working />
        <WhyGorex />
        <Demand />
    </div>
  )
}

export default Home
