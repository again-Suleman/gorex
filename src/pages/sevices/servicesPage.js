import React from 'react'

// Components
import ServicesHeader from '../../components/services/servicesHeader/servicesHeader'
import MultipleServices from '../../components/services/multipleServices/multipleServices'
import ContactBottom from '../../components/reusable/contactBottom'

function Services() {
  return (
    <>
      <ServicesHeader />  
      <MultipleServices />
      <ContactBottom />
    </>
  )
}

export default Services
