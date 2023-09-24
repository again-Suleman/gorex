import React from 'react'

// Components
import PatnershipHeader from '../../components/patnership/patnershipHeader/patnershipHeader'
import WhatWeProvide from '../../components/patnership/whatWeProvide/whatWeProvide'
import Modules from '../../components/patnership/modules/modules'
import Benefits from '../../components/patnership/benefits/benefits'
import FeaturesP from '../../components/patnership/features/featuresP'
import AppFeatures from '../../components/patnership/appFeatures/appFeatures'
import ContactBottom from '../../components/reusable/contactBottom'

function Patnerships() {
  return (
    <>
      <PatnershipHeader />
      <WhatWeProvide />
      <Modules />
      <Benefits />
      <FeaturesP /> 
      <AppFeatures />
      <ContactBottom />
    </>
  )
}

export default Patnerships
