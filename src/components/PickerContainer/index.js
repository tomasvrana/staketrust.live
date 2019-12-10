import React, { Fragment } from 'react'
import styled from 'styled-components'
import LanguagePicker from './LanguagePicker'
import ThemePicker from './ThemePicker'

const BlockContainer = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.contentWidth};
  display: block;
  top: 2rem;
  padding: 0 ${({ theme }) => theme.dimensions.contentGutterSize};
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    position: absolute;
  }

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    top: 1rem;
    padding-left: 1rem;
    box-sizing: border-box;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > div > div {
    flex: 1;
  }

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    display: block;

    > div > div {
      display: inline-block;
      vertical-align: middle;

      &:first-of-type {
        margin-right: 1.5rem;
      }
    }
  }
`

const LanguageContainer = styled.div`
  width: 100%;
  max-width: 17rem;
  min-width: 12rem;
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;

  &.short {
    width: auto;
    min-width: auto;
  }

  > div {
    text-align: left;
    flex: 1;
  }
`

const ThemePickerContainer = styled.div`
  flex: 1;
`

const MobileContainer = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    display: block;
  }
`

const DesktopContainer = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    display: none;
  }
`

const PickerContainer = () => (
  <Fragment>
    <BlockContainer>
      <Wrapper>
        <DesktopContainer>
          <ThemePickerContainer>
            <div>
              <ThemePicker />
            </div>
          </ThemePickerContainer>
          <LanguageContainer>
            <div>
              <LanguagePicker />
            </div>
          </LanguageContainer>
        </DesktopContainer>
        <MobileContainer>
          <LanguageContainer className='short'>
            <div>
              <LanguagePicker />
            </div>
          </LanguageContainer>
          <ThemePickerContainer>
            <div>
              <ThemePicker />
            </div>
          </ThemePickerContainer>
        </MobileContainer>
      </Wrapper>
    </BlockContainer>
  </Fragment>
)

export default PickerContainer
