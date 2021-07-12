import Head from 'next/head'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'
import '../styles/app.scss'
import { Provider } from 'react-redux'
import { store } from '../src/app/store'
import { dsn, integrations } from '../src/data/sentry'

const release = process.env.NEXT_PUBLIC_SENTRY_RELEASE

if (release) {
  Sentry.init({ dsn, release, integrations, tracesSampleRate: 1.0 })
}

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
