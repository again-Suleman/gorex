import { Stack } from '@mui/material'
import React from 'react'
import LeftBottom from './leftBottom'
import RightBottom from './rightBottom'

function WorkingBottom() {
  return (
    <div>
      <Stack direction={'row'}>
            <LeftBottom />
            <RightBottom />
      </Stack>
    </div>
  )
}

export default WorkingBottom
