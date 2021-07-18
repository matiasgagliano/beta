import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import VaultActions from './vaultActions'
import VaultClaim from './vaultClaim'
import { fromWei } from '../helpers/wei'
import { formatAmount, toPercentage, toUsd } from '../helpers/format'

const VaultDetails = props => {
  const {
    balance,
    decimals,
    earn,
    pricePerFullShare,
    shares,
    tvl,
    usdPrice,
    vaultDecimals
  } = props.vault

  const vault        = props.vault
  const staked       = shares && fromWei(shares, vaultDecimals)
  const deposited    = staked?.times(pricePerFullShare)
  const depositedUsd = toUsd(deposited, decimals, usdPrice)
  const tvlUsd       = toUsd(tvl, decimals, usdPrice)

  return (
    <React.Fragment>
      <div className="text-center">
        <Image src={`/../images/tokens/${vault.token}.svg`} alt={vault.token} height="48" width="48" />

        <h3 className="h4 mt-2 mb-1">
          {vault.symbol}
        </h3>

        <p className="small text-muted mb-0">
          Uses:
          <span className="ms-2">
            {vault.uses}
          </span>
        </p>

        <hr className="border border-primary border-1 opacity-100" />

        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-7">
            <div className="row my-2">
              <div className="col-6 text-start">
                <p className="text-muted fw-bold mb-0">
                  Balance
                </p>
              </div>
              <div className="col-6 text-end">
                <p className="fw-bold mb-0">
                  {balance ? formatAmount(fromWei(balance, decimals), '', 8) : '-'}
                </p>
              </div>
            </div>

            <div className="row my-2">
              <div className="col-6 text-start">
                <p className="text-muted fw-bold mb-0">
                  Deposited
                </p>
              </div>
              <div className="col-6 text-end">
                <p className="fw-bold mb-0">
                  {deposited ? formatAmount(fromWei(deposited, decimals), '', 8) : '-'}
                </p>
              </div>
            </div>

            <VaultClaim vault={vault} />

            <div className="row my-2">
              <div className="col-6 text-start">
                <p className="text-muted fw-bold mb-0">
                  APY
                </p>
              </div>
              <div className="col-6 text-end">
                <p className="fw-bold mb-0">
                  {toPercentage(vault.apy)}
                </p>
              </div>
            </div>

            <div className="row my-2">
              <div className="col-6 text-start">
                <p className="text-muted fw-bold mb-0">
                  Daily
                </p>
              </div>
              <div className="col-6 text-end">
                <p className="fw-bold mb-0">
                  {toPercentage((vault.apy || 0.0) / 365)}
                </p>
              </div>
            </div>

            <div className="row my-2">
              <div className="col-6 text-start">
                <p className="text-muted fw-bold mb-0">
                  <abbr title="Total assets">TA</abbr>
                </p>
              </div>
              <div className="col-6 text-end">
                <p className="fw-bold mb-0">
                  {tvlUsd ? formatAmount(tvlUsd, '$') : '-'}
                </p>
              </div>
            </div>

            <div className="row my-2">
              <div className="col-6 text-start">
                <p className="text-muted fw-bold mb-0">
                  Earn
                </p>
              </div>
              <div className="col-6 text-end">
                <p className="fw-bold mb-0">
                  {earn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-primary border-1 opacity-100" />

      <VaultActions allowance={vault.allowance}
                    apy={vault.apy}
                    balance={balance}
                    decimals={decimals}
                    deposited={deposited}
                    pid={vault.pid}
                    pool={vault.pool}
                    pricePerFullShare={vault.pricePerFullShare}
                    symbol={vault.symbol}
                    token={vault.token}
                    vault={vault}
                    vaultDecimals={vaultDecimals} />

      <div className="text-center mt-4">
        <h3 className="h6 text-muted text-uppercase">
          Your balance
        </h3>

        <p className="fw-bold mb-0">
          {depositedUsd ? formatAmount(depositedUsd, '$') : '-'}
        </p>
      </div>
    </React.Fragment>
  )
}

VaultDetails.propTypes = {
  vault: PropTypes.object.isRequired
}

export default VaultDetails
