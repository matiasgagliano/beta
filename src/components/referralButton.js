import Link from 'next/link'

const ReferralButton = () => {
  return (
    <Link href="/referrals">
      <a className="btn btn-outline-primary text-white mt-3 d-lg-none">
        Referrals
      </a>
    </Link>
  )
}

export default ReferralButton
