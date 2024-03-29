import React from 'react'
import Query from './Query'
import { Box, Typography, Container } from '@material-ui/core'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Box paddingTop={10} paddingBottom={10}>
        <Container maxWidth='lg'>
          <Box paddingTop={5} paddingBottom={5} textAlign='center'>
            <Box paddingTop={15} paddingBottom={1}>
              <Typography variant='h1'>{frontmatter.content.page_title}</Typography>
            </Box>
            <Box paddingTop={1} paddingBottom={5}>
              <Typography variant='h2'>{frontmatter.content.page_subtitle}</Typography>
            </Box>
            <Box paddingTop={2} paddingBottom={2}>
              <Typography variant='body1'>{frontmatter.content.page_body}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    )}
  />
)
