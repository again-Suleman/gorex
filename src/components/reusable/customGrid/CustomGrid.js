import React from 'react'
import { Grid } from '@mui/material'

import List from './List'

function CustomGrid({ Items, xs=12, sm=6, md=4, lg=4, bgcolor='white' }) {
    return (
        <>
            <Grid container sx={{ my: 7, }}>
                {Items.map((item, index) => (
                    <List key={index} item={item} xs={xs} sm={sm} md={md} lg={lg} bgcolor={bgcolor} />
                ))}
            </Grid>
        </>
    )
}

export default CustomGrid
