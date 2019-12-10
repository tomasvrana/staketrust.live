import React from 'react'
import Query from './Query'
import ContactForm from './ContactForm'
import { Box, Typography, Grid } from '@material-ui/core'

export default () => (
  <Query
    render={data => (
      <Box id='contact' paddingTop={10}>
        <Grid container>
          <Grid item xs={6} align='left'>
            <Box paddingRight={10} paddingBottom={2}>
              <Typography variant='h3'>{data.content.contact_title}</Typography>
              <Box paddingTop={2} paddingBottom={2}>
                <Typography variant='h4'>{data.content.contact_lead}</Typography>
              </Box>
              <Typography variant='body2'>{data.content.contact_body}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} align='left'>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    )}
  />
)
