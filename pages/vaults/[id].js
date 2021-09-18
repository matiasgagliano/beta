import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Vault from '../../src/components/vault'

const VaultPage = () => {
  const router = useRouter()
  const { id } = router.query

  if (id) {
    return (
      <React.Fragment>
        <Head>
          <title>2pi</title>
        </Head>

        <Vault id={id} />
      </React.Fragment>
    )
  } else {
    return (
      <div className="spinner-border text-primary mt-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }
}

export default VaultPage
