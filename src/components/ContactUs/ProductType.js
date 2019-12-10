import React from 'react'
import { FormControl, InputLabel, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Query from './Query'

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

export default function InputSlider () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    productType: ''
  })

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    })
  }

  return (
    <Query
      render={data => (
        <FormControl variant='filled' className={classes.formControl} fullWidth>
          <InputLabel htmlFor='product-type'>{data.content.contact_form.producttype}</InputLabel>
          <Select
            native
            value={state.productType}
            onChange={handleChange('productType')}
            inputProps={{
              name: 'productType',
              id: 'product-type'
            }}
          >
            <option value='' />
            <option value={10}>Virtual</option>
            <option value={10}>Physical</option>
          </Select>
        </FormControl>
      )}
    />
  )
}
