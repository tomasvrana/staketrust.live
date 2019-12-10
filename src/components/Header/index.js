import React, { Fragment } from 'react'
import styled from 'styled-components'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Logo from './Logo'

const MobileContainer = styled.span`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    display: block;
  }
`

const Container = styled.header`
  width: 100%;
  position: relative;
  margin: 10rem 0 12rem;
`

const DesktopContainer = styled.span`
  display: block;

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    display: none;
  }
`

const MainTitleLogo = styled.div`
  z-index: 2;
`

export default () => (
  <Fragment>
    <MobileContainer>
      <MobileNavigation />
    </MobileContainer>
    <Container>
      <MainTitleLogo>
        <Logo />
      </MainTitleLogo>
      <DesktopContainer>
        <DesktopNavigation />
      </DesktopContainer>
    </Container>
  </Fragment>
)
