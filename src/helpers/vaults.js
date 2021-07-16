import {
  fetchVaultsDataAsync,
  newVaultFetch,
  resetVaults
} from '../features/vaultsSlice'
import { defaultChain, supportedChains } from '../features/walletSlice'

const FETCH_INTERVAL = 30 * 1000

export const constantVaultFetch = (address, chainId, dispatch) => {
  const delay     = address ? FETCH_INTERVAL : FETCH_INTERVAL * 6
  const fetchData = () => {
    const skip      = chainId !== defaultChain && ! address
    const supported = supportedChains.includes(chainId)

    if (skip && supported) {
      return
    }

    if (supported) {
      dispatch(newVaultFetch())
      dispatch(fetchVaultsDataAsync())
    } else {
      dispatch(resetVaults())
    }
  }

  const interval = setInterval(fetchData, delay)

  fetchData()

  return () => clearInterval(interval)
}
