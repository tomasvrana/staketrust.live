import React from 'react'
import styled from 'styled-components'
import Query from './Query'
import ReactMarkdown from 'react-markdown'
import { Container, Box, Typography, Grid } from '@material-ui/core'
import Link from '../Link'

const FooterContainer = styled(Container)`
  color: ${({ theme }) => theme.palette.grey[600]};
  margin-top: 8rem;
`

const Upper = styled(Box)`
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grey[800]};
  text-transform: uppercase;

  a {
    color: ${({ theme }) => theme.palette.grey[600]};
    transition: color 0.2s ease-in-out;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.palette.grey[400]};
      }
    }
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`

const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const getCurrentYear = () => new Date().getFullYear()

export default () => (
  <Query
    render={data => (
      <FooterContainer maxWidth='lg'>
        <Upper display='flex' paddingBottom={2}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            flex={1}
          >
            <Typography>
              {data.label_cardano} {getCurrentYear()}
            </Typography>
          </Box>
        </Upper>
        <Box paddingTop={2} paddingBottom={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={8}>
              <Box paddingRight={2}>
                <Typography component='div' variant='body2'>
                  <ReactMarkdown source={data.content_body} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Box paddingTop={1.5}>
                <Typography variant='body2'>
                  {data.product_info}
                </Typography>
                <br />
                <LinksList>
                  {data.product_links.map((link, index) => (
                    <li key={`${index}${link.href}`}><Link href={link.href} target='_blank' tracking={{ label: `footer_community_${link.href}` }}><Typography component='span' variant='body2'>{link.label}</Typography></Link></li>
                  ))}
                </LinksList>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Box paddingTop={1.5}>
                <Typography variant='body2'>
                  {data.community_info}
                </Typography>
                <br />
                <LinksList>
                  {data.community_links.map((link, index) => (
                    <li key={`${index}${link.href}`}><Link href={link.href} target='_blank' tracking={{ label: `footer_community_${link.href}` }}><Typography component='span' variant='body2'>{link.label}</Typography></Link></li>
                  ))}
                </LinksList>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </FooterContainer>
    )}
  />
)
