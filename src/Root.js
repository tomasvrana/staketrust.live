import React, { Fragment, useEffect } from 'react'
import './bootstrap'
import PropTypes from 'prop-types'
import { setHref } from './helpers/url'
import { autoCapture } from './helpers/analytics'
import { REDIRECT } from './constants/analytics'
import { Location } from '@reach/router'

function adminRedirect (hash) {
  const hashParams = hash.replace(/^#\/?/, '').split('&').map(p => p.split('='))
  const tokenParams = [ 'invite_token', 'access_token' ]
  const hasToken = hashParams.filter(p => tokenParams.includes(p[0])).length > 0
  if (hasToken) {
    autoCapture({ category: REDIRECT, action: 'redirect_to_admin' })
    setHref(`/admin/${hash}`)
  }
}

const AdminRedirector = ({ hash }) => {
  useEffect(() => {
    adminRedirect(hash)
  }, [])

  return null
}

AdminRedirector.propTypes = {
  hash: PropTypes.string.isRequired
}

const Root = ({ element }) => (
  <Location>
    {({ location }) => (
      <Fragment>
        <AdminRedirector hash={location.hash || ''} />
        {element}
      </Fragment>
    )}
  </Location>
)

Root.propTypes = {
  element: PropTypes.node.isRequired
}

export default Root
