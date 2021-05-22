import BigNumber from 'bignumber.js'
import { useSelector } from 'react-redux'
import { selectVaults } from '../features/vaultsSlice'
import { formatAmount, toUsd } from '../helpers/format'
import { fromWei } from '../helpers/wei'

const Deposited = props => {
  const vaults    = useSelector(selectVaults)
  const deposited = vaults.reduce((acc, vault) => {
    const {
      shares,
      decimals,
      pricePerFullShare,
      vaultDecimals,
      usdPrice
    } = vault

    const staked    = shares && fromWei(shares, vaultDecimals)
    const deposited = staked?.times(pricePerFullShare)
    const amount    = toUsd(deposited, decimals, usdPrice)

    return amount?.isFinite() ? acc.plus(amount) : acc
  }, new BigNumber('0'))

  return (
    <div className="row">
      <div className="col-6 col-sm-8 col-lg-10 text-end border-end pe-3 border-2">
        <h2 className="h5 mb-0">
          Deposited
        </h2>
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <h3 className="h5 text-primary mb-0">
          ${deposited.isNaN() ? '-' : formatAmount(deposited.toNumber())}
        </h3>
      </div>
    </div>
  )
}

export default Deposited
