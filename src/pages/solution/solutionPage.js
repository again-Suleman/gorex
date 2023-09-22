import React from 'react'

import SolutionsHeader from '../../components/solutions/solutionsHeader/solutionsHeader'
import Tracking from '../../components/solutions/tracking/tracking'
import RedSea from '../../components/solutions/redSea/redSea'
import ContactBottom from '../../components/reusable/contactBottom'

function Solutions() {
  return (
    <>
      <SolutionsHeader />
      <Tracking />
      <RedSea />
      <ContactBottom bgcolor='#fafafa' />
    </>
  )
}

export default Solutions
