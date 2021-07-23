import Head from 'next/head'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'
import '../styles/app.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { store } from '../src/app/store'
import { dsn, integrations } from '../src/data/sentry'
import Loading from '../src/components/loading'

const release = process.env.NEXT_PUBLIC_SENTRY_RELEASE

if (release) {
  Sentry.init({ dsn, release, integrations, tracesSampleRate: 1.0 })
}

const App = ({ Component, pageProps }) => {
  const router                = useRouter()
  const [loading, setLoading] = useState(false)

  const handleRouteStart = () => {
    setLoading(true)
  }

  const handleRouteComplete = () => {
    setLoading(false)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteComplete)
    }
  }, [router.events])

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {loading ? <Loading /> : <Component {...pageProps} />}
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
