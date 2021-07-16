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

  return (
    <div className="container my-5">
      <Back />

      <h1 className="display-1 text-center my-5 pt-5">
        Page not found!
      </h1>
    </div>
  )
}

export default Custom404
