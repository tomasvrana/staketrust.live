import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, Container, Typography, Button, Hidden, Drawer } from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'
import Link from '../Link'
import { LanguageConsumer } from '../../state'
import Logo from './Logo'
import Query from './Query'

const MenuToggle = styled(Button)`
  min-width: 0;
  padding: 1rem;
  border-radius: 50%;
`

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
    max-width: 6rem;
  }
`

const Nav = styled.nav`
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;

    li {
      padding: 0 2rem;
      text-transform: uppercase;

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
  const [ mobileMenuVisible, setMobileMenuVisible ] = useState(false)

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
    <Query
      render={data => (
        <Fragment>
          <SiteLogo
            paddingRight={2}
            flexDirection='column'
            display='flex'
            justifyContent='center'
          >
            <Logo />
          </SiteLogo>
        </Fragment>
      )}
    />
  )

  const getMenuToggle = () => (
    <MenuToggle variant='outlined' onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
      <Menu />
    </MenuToggle>
  )

  return (
    <Query
      render={data => (
        <LanguageConsumer>
          {({ lang }) => (
            <Fragment>
              <MenuContainer
                paddingTop={headerMinimised ? 1 : 2}
                paddingBottom={headerMinimised ? 1 : 2}
                position='fixed'
                width='100%'
                bgcolor='background.alternative'
                zIndex={10}
              >
                <Container maxWidth='lg'>
                  <Box display='flex'>
                    <Hidden lgUp>
                      <Box
                        flex={1}
                        display='flex'
                      >
                        {getSiteLogo()}
                      </Box>
                    </Hidden>
                    <Hidden mdDown>
                      <Box
                        display='flex'
                      >
                        {getSiteLogo()}
                      </Box>
                    </Hidden>
                    <Hidden mdDown>
                      <Box
                        flexDirection='column'
                        display='flex'
                        justifyContent='center'
                        flexGrow={1}
                        paddingLeft={4}
                        paddingRight={4}
                      >
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
                      </Box>
                    </Hidden>
                    <Hidden lgUp>
                      <Box
                        flexDirection='column'
                        display='flex'
                        justifyContent='center'
                        paddingLeft={2}
                      >
                        {getMenuToggle()}
                      </Box>
                      <Drawer
                        anchor='left'
                        open={mobileMenuVisible}
                        onClose={() => setMobileMenuVisible(!mobileMenuVisible)}
                        transitionDuration={{
                          enter: 600,
                          exit: 400
                        }}
                      >
                        <Box width='100vw' height='100vh' display='flex'>
                          <Box
                            paddingTop={4}
                            paddingBottom={4}
                            overflow='auto'
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            flex={1}
                          >
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
                          </Box>
                          <Box
                            position='absolute'
                            right='3rem'
                            top='2rem'
                          >
                            <MenuToggle
                              variant='outlined'
                              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
                            >
                              <Close />
                            </MenuToggle>
                          </Box>
                        </Box>
                      </Drawer>
                    </Hidden>
                  </Box>
                </Container>
              </MenuContainer>
            </Fragment>
          )}
        </LanguageConsumer>
      )}
    />
  )
}
