import React from 'react'

import SolutionsHeader from '../../components/solutions/solutionsHeader/solutionsHeader'
import Tracking from '../../components/solutions/tracking/tracking'
import RedSea from '../../components/solutions/redSea/redSea'
import ContactBottom from '../../components/reusable/contactBottom'
import { Box } from '@mui/system'

function Solutions() {
  return (
    <>
      <Box>
        <SolutionsHeader />
        <Tracking />
        <RedSea />
        <ContactBottom bgcolor='#fafafa' />

      </Box>
    </>
  )
}

export default Solutions
