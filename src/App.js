import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider, LanguageProvider, PageLoaderProvider } from './state'
import GlobalStyles from './GlobalStyles'

const App = ({ element }) => (
  <ThemeProvider>
    <Fragment>
      <GlobalStyles />
      <LanguageProvider>
        <PageLoaderProvider>
          <HelmetProvider>
            <Fragment>
              {element}
            </Fragment>
          </HelmetProvider>
        </PageLoaderProvider>
      </LanguageProvider>
    </Fragment>
  </ThemeProvider>
)

App.propTypes = {
  element: PropTypes.node.isRequired
}

export default App
