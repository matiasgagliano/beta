import React from 'react'
import Head from 'next/head'
import Referrals from '../src/components/referrals'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>2pi Finance - Referrals</title>
      </Head>

      <Referrals />
    </React.Fragment>
  )
}
