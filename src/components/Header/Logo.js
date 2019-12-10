import React from 'react'
import styled from 'styled-components'
import Link from '../Link'
import { ThemeConsumer } from '../../state'

const LogoImage = styled.img`
  margin: 1.8rem 0 1.6rem 0;
  width: 12rem;
`

const Logo = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Link href='/' tracking={{ label: `navbar_logo` }}><LogoImage src={theme.images.logo} alt='Logo' /></Link>
    )}
  </ThemeConsumer>
)

export default Logo
