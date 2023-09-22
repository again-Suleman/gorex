import React from 'react'
import { Box } from '@mui/material'

// Components
import OffersHeader from '../../components/offers/offersHeader/offersHeader'
import OffersCards from '../../components/offers/offersCards/offersCards'
import ContactBottom from '../../components/reusable/contactBottom'


function Offers() {
  return (
    <>
      <OffersHeader />
      <OffersCards />
      <ContactBottom />
    </>
  )
}

export default Offers
