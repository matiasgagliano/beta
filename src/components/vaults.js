import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import VaultItem from './vaultItem'
import { fromWei } from '../helpers/wei'
import { toUsd } from '../helpers/format'
import { selectVaults } from '../features/vaultsSlice'
import { constantVaultFetch } from '../helpers/vaults'
import { selectAddress, selectChainId } from '../features/walletSlice'

const renderVaults = (vaults, chainId) => {
  return (vaults[chainId] || []).map(vaultData => {
    const {
      balance,
      decimals,
      earn,
      pricePerFullShare,
      shares,
      tvl,
      usdPrice,
      vaultDecimals
    } = vaultData

    const staked       = shares && fromWei(shares, vaultDecimals)
    const deposited    = staked?.times(pricePerFullShare)
    const balanceUsd   = toUsd(balance, decimals, usdPrice)
    const depositedUsd = toUsd(deposited, decimals, usdPrice)
    const tvlUsd       = toUsd(tvl, decimals, usdPrice)

    return (
      <VaultItem apy={vaultData.apy}
                 balance={balance}
                 balanceUsd={balanceUsd}
                 color={vaultData.color}
                 decimals={decimals}
                 deposited={deposited}
                 depositedUsd={depositedUsd}
                 earn={earn}
                 key={vaultData.key}
                 symbol={vaultData.symbol}
                 token={vaultData.token}
                 tvlUsd={tvlUsd}
                 uses={vaultData.uses}
                 vaultKey={vaultData.key} />
    )
  })
}

const Vaults = () => {
  const address  = useSelector(selectAddress)
  const chainId  = useSelector(selectChainId)
  const vaults   = useSelector(selectVaults)
  const dispatch = useDispatch()

  useEffect(() => {
    return constantVaultFetch(address, chainId, dispatch)
  }, [address, chainId, dispatch])

  return (
    <div className="mt-1 pt-3 pt-lg-0">
      <div className="d-flex my-4">
        <h2 className="h2 fw-bold flex-grow-1 mb-0">
          Vaults
        </h2>

        <p className="small text-muted text-right align-self-end mb-0 ms-4">
          Withdrawal Fee: 0.1%.
        </p>

        <p className="small text-muted text-right align-self-end mb-0 ms-1">
          Deposit Fee: 0%.
        </p>
      </div>

      <div className="mt-3">
        {renderVaults(vaults, chainId)}
      </div>
    </div>
  )
}

export default Vaults
