import { Box } from '@mui/material'
import React from 'react'

// Components
import AboutHeader from '../../components/about/header/aboutHeader'
import CeoMessage from '../../components/about/ceoMessage/ceoMessage'
import CompanyObjective from '../../components/about/companyObjective/companyObjective'
import VisionMission from '../../components/about/Vision-Mission/vision-Mission'
import ContactBottom from '../../components/reusable/contactBottom'

function About() {
  return (
    <>
      <Box >
        <AboutHeader />
        <CeoMessage />
        <CompanyObjective />
        <VisionMission />
        <ContactBottom />
      </Box>
    </>
  )
}

export default About
