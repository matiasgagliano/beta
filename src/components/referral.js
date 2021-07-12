import Link from 'next/link'
import ReferralLink from './referralLink'
import ReferralUnlock from './referralUnlock'
import { useSelector } from 'react-redux'
import { selectStatus } from '../features/walletSlice'

const Referral = () => {
  const status  = useSelector(selectStatus)

  const renderAction = () => {
    if (status === 'success') {
      return <ReferralLink />
    } else {
      return <ReferralUnlock />
    }
  }

  return (
    <div className="card my-4 shadow-none">
      <div className="card-body text-center bg-dark border border-primary border-2 rounded px-lg-5 py-lg-4">
        <div className="text-start mb-0">
          <Link href="/">
            <a className="text-decoration-none">
              <div className="d-flex align-items-center">
                <div className="h4 mb-0">
                  <i className="bi-arrow-left"></i>
                </div>
                <div className="ms-2">
                  Back
                </div>
              </div>
            </a>
          </Link>
        </div>

        <h2 className="h1 text-primary mt-5 mb-0">
          2pi.finance
        </h2>

        <h3 className="h1 text-primary">
          Referral program
        </h3>

        <div className="row justify-content-md-center">
          <div className="col-lg-7">
            <p className="lead mt-4">
              Share the referral link below to invite your friends and earn 1% of your friends earnings.
            </p>
          </div>
        </div>

        {renderAction()}
      </div>
    </div>
  )
}

export default Referral
