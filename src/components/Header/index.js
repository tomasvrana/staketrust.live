import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, Container, AppBar, Toolbar } from '@material-ui/core'
import { LanguageConsumer } from '../../state'
import Logo from './Logo'
import Query from './Query'

const MenuContainer = styled(Box)`
  transition: padding 0.4s ease-in-out;
`

const SiteLogo = styled(Box)`
  width: 36rem;
  a {
    color: ${({ theme }) => theme.palette.text.primary};
    text-decoration:none;
  }
  * {
    vertical-align:middle
  }
`

export default () => {
  const [ headerMinimised, setHeaderMinimised ] = useState(false)

  const onScroll = () => {
    if (window.scrollY >= 120 && !headerMinimised) setHeaderMinimised(true)
    if (window.scrollY < 120 && headerMinimised) setHeaderMinimised(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    window.addEventListener('touchmove', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchmove', onScroll)
    }
  }, [ headerMinimised ])

  const getSiteLogo = () => (
    <Fragment>
      <SiteLogo
        paddingRight={2}
      >
        <Logo />
      </SiteLogo>
    </Fragment>
  )

  return (
    <Query
      render={data => (
        <LanguageConsumer>
          {({ lang }) => (
            <Fragment>
              <AppBar>
                <MenuContainer
                  paddingTop={headerMinimised ? 1 : 2}
                  paddingBottom={headerMinimised ? 1 : 2}
                  position='fixed'
                  width='100%'
                  bgcolor='background.alternative'
                  zIndex={10}
                >
                  <Container maxWidth='lg'>
                    <Toolbar>
                      {getSiteLogo()}
                    </Toolbar>
                  </Container>
                </MenuContainer>
              </AppBar>
            </Fragment>
          )}
        </LanguageConsumer>
      )}
    />
  )
}
