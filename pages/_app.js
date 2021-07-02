import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'
import '../styles/app.scss'
import { dsn, integrations } from '../src/data/sentry'

const release = process.env.REACT_APP_SENTRY_RELEASE

if (release) {
  Sentry.init({ dsn, release, integrations, tracesSampleRate: 1.0 })
}

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
