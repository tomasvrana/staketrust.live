import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, Container, Typography, AppBar, Toolbar } from '@material-ui/core'
import Link from '../Link'
import { LanguageConsumer } from '../../state'
import Logo from './Logo'
import Query from './Query'

const MenuContainer = styled(Box)`
  transition: padding 0.4s ease-in-out;
`

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
      text-decoration: none;
    }
  }
`

const SiteLogo = styled(Box)`
  img {
    max-width: 16rem;
  }
`

const Nav = styled.nav`
  width: 100%;
  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    text-align:right;
    li {
      padding: 0;
      text-transform: none;
      display:inline-block;
      a {
        font-size:1.4rem;
        padding-left:1rem;
        padding-right:1rem;
      }
      &:last-of-type {
        padding-right: 0;
      }

      &:first-of-type {
        padding-left: 0;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    ul {
      flex-direction: column;
      text-align: center;

      li {
        padding: 0.5rem 0;
      }
    }
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
                      <Nav>
                        <ul>
                          {data.navigation.items.map((item, index) => (
                            <li>
                              <Typography variant='body1'>
                                <MenuLink
                                  href={`#${item.slug}`}
                                  activeClassName='active'
                                >
                                  {item.label}
                                </MenuLink>
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Nav>
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
