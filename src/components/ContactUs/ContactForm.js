import React from 'react'
import Query from './Query'
import EmployeesSlider from './EmployeesSlider'
import ProductType from './ProductType'
import { Box, TextField, Button } from '@material-ui/core'

export default () => (
  <Query
    render={data => (
      <Box paddingTop={0} paddingBottom={1}>
        <form noValidate>
          <Box paddingBottom={2}>
            <TextField id='full-name' label={data.content.contact_form.fullname} variant='filled' fullWidth />
          </Box>
          <Box paddingBottom={2}>
            <TextField id='jobtitle' label={data.content.contact_form.jobtitle} variant='filled' fullWidth />
          </Box>
          <Box paddingBottom={2}>
            <TextField id='company' label={data.content.contact_form.company} variant='filled' fullWidth />
          </Box>
          <Box paddingBottom={2}>
            <EmployeesSlider />
          </Box>
          <Box paddingBottom={2}>
            <ProductType />
          </Box>
          <Box paddingBottom={2}>
            <TextField id='phone' label={data.content.contact_form.phone} variant='filled' fullWidth />
          </Box>
          <Box paddingBottom={2}>
            <TextField id='email' label={data.content.contact_form.email} variant='filled' fullWidth />
          </Box>
          <Box paddingBottom={2}>
            <Button variant='contained' type='submit' color='primary'>{data.content.contact_form.submit}</Button>
          </Box>
        </form>
      </Box>
    )}
  />
)
