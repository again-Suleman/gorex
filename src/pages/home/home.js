import React from 'react'

// Components
import Header from '../../components/home/header/header';
import Carousal from '../../components/home/carousal/carousal';
import Working from '../../components/home/working/working';
import WhyGorex from '../../components/home/whyGorex/whyGorex';
import Demand from '../../components/home/gorexDemand/demand';
import Features from '../../components/home/features/features';
import Patnerships from '../../components/home/patnerships/patnerships'
import ContactBottom from '../../components/reusable/contactBottom';

function Home() {
  return (
    <div>
        <Header />
        <Carousal />
        <Working />
        <WhyGorex />
        <Demand />
        <Features />
        <Patnerships />
        <ContactBottom />
    </div>
  )
}

export default Home
