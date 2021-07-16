import Back from '../src/components/back'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath !== '/404') {
      router.push(router.asPath)
    }
  }, [])

  const render = () => {
    console.debug('asPath', router.asPath)

    if (router.asPath === '/404') {
      return (
        <div className="container my-5">
          <Back />

          <h1 className="display-1 text-center my-5 pt-5">
            Page not found!
          </h1>
        </div>
      )
    } else {
      return (
        <div className="spinner-border text-primary mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    }
  }

  return render()
}

export default Custom404
