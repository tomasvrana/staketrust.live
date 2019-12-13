import React from 'react'
import styled from 'styled-components'
import Link from '../Link'
import { ThemeConsumer } from '../../state'
import { Typography } from '@material-ui/core'

const LogoImage = styled.img`
  margin: 1.8rem 1rem 1.6rem 0;
  width: 4rem;
`

const Logo = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Link href='/' tracking={{ label: `navbar_logo` }}><LogoImage src={theme.images.logo} alt='Logo' /> <Typography display='inline' variant='body1' component='span'>Stake Trust</Typography></Link>
    )}
  </ThemeConsumer>
)

export default Logo
