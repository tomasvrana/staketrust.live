import React from 'react'
import { Box, Typography, Grid, Slider } from '@material-ui/core'
import Query from './Query'

export default function InputSlider () {
  const [value, setValue] = React.useState(1)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Query
      render={data => (
        <Box fullWidth>
          <Grid container>
            <Grid item xs={6}>
              <Typography id='product-type-label' variant='body2' component='small'>{data.content.contact_form.employees}</Typography>
            </Grid>
            <Grid item xs={6} align='right'>
              <Typography id='input-slider' variant='body1' component='strong'>{value}</Typography>
            </Grid>
          </Grid>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby='input-slider'
          />
        </Box>
      )}
    />
  )
}
