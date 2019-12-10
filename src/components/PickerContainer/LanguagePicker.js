import React, { Fragment } from 'react'
import styled from 'styled-components'
import Select from '../Inputs/Select'
import { LanguageConsumer } from '../../state'
import config from '../../config'
import Query from './Query'

const MobileContainer = styled.span`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    display: block;
  }
`

const DesktopContainer = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    display: none;
  }
`

export default () => (
  <Query
    render={({ select_language: selectLanguage }) => (
      <LanguageConsumer>
        {({ lang, setLang }) => (
          <Fragment>
            <MobileContainer>
              <Select
                value={lang}
                options={
                  Object.keys(config.availableLanguages)
                    .map(language => ({
                      key: language,
                      value: language,
                      label: (
                        <span className='text-align-center display-block'>
                          <span title={config.availableLanguages[language].label}>{config.availableLanguages[language].flag}</span>
                        </span>
                      ),
                      title: config.availableLanguages[language].label
                    }))
                }
                onChange={lang => setLang(lang)}
                showArrow={false}
                name='mobile_language_picker'
                title='Select language'
              />
            </MobileContainer>
            <DesktopContainer>
              <Select
                value={lang}
                options={
                  Object.keys(config.availableLanguages)
                    .map(language => ({
                      key: language,
                      value: language,
                      label: (
                        <Fragment>
                          <span aria-hidden>{config.availableLanguages[language].flag}</span>
                          <span className='text-transform-capitalize margin-left-1'>{config.availableLanguages[language].label}</span>
                        </Fragment>
                      ),
                      title: config.availableLanguages[language].label
                    }))
                }
                onChange={lang => setLang(lang)}
                name='desktop_language_picker'
                title={selectLanguage}
              />
            </DesktopContainer>
          </Fragment>
        )}
      </LanguageConsumer>
    )}
  />
)
