import PropTypes from 'prop-types'
import BigNumber from 'bignumber.js'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toastAdded, toastDestroyed } from '../features/toastsSlice'
import { fetchVaultsDataAsync, newVaultFetch } from '../features/vaultsSlice'
import { fromWei } from '../helpers/wei'
import { formatAmount } from '../helpers/format'
import { transactionSent } from '../helpers/transactions'
import {
  selectAddress,
  selectChainId,
  selectWeb3
} from '../features/walletSlice'

const VaultClaim = props => {
  const address                     = useSelector(selectAddress)
  const chainId                     = useSelector(selectChainId)
  const web3                        = useSelector(selectWeb3)
  const dispatch                    = useDispatch()
  const [claimLabel, setClaimLabel] = useState('Claim')
  const [status, setStatus]         = useState('ready')

  const pendingTokens = vault => {
    const decimals               = new BigNumber(18) // just to save a call
    const { pendingTokens, pid } = vault

    return pid && pendingTokens && fromWei(pendingTokens, decimals)
  }

  const getVaultContract = () => {
    const vault = require(`../abis/main/${chainId}/archimedes`).default

    return new web3.eth.Contract(vault.abi, vault.address)
  }

  const handleClick = () => {
    const vaultContract = getVaultContract()

    setClaimLabel('Claim...')
    setStatus('claim')

    vaultContract.methods.harvest(props.vault.pid).send({
      from: address
    }).on('transactionHash', hash => {
      transactionSent(hash, dispatch)
    }).then(() => {
      setStatus('ready')
      setClaimLabel('Claim')
      dispatch(toastDestroyed('Claim rejected'))
      dispatch(newVaultFetch())
      dispatch(fetchVaultsDataAsync())
      dispatch(
        toastAdded({
          title:    'Claim approved',
          body:     'Your claim was successful',
          icon:     'check-circle',
          style:    'success',
          autohide: true
        })
      )
    }).catch(() => {
      setStatus('ready')
      setClaimLabel('Claim')
      dispatch(
        toastAdded({
          title:    'Claim rejected',
          body:     'Your claim was rejected, please check the explorer and try again',
          icon:     'exclamation-triangle',
          style:    'danger',
          autohide: true
        })
      )
    })
  }

  const pending = pendingTokens(props.vault)

  const enabled = () => {
    return status === 'ready' && chainId === 80001 && pending?.isGreaterThan(0)
  }

  if (props.vault.pid) {
    return (
      <div className="row my-2">
        <div className="col-6 text-start">
          <p className="text-muted fw-bold mb-0">
            2pi earned
          </p>
        </div>
        <div className="col-6 text-end">
          <p className="fw-bold mb-1">
            {pending ? formatAmount(pending, '', 8) : '-'}
          </p>
          <p className="mb-0">
            <button type="button"
                    className="btn btn-sm btn-dark"
                    onClick={handleClick}
                    disabled={! enabled()}>
              {claimLabel}
            </button>
          </p>
        </div>
      </div>
    )
  } else {
    return null
  }
}

VaultClaim.propTypes = {
  vault: PropTypes.object.isRequired
}

export default VaultClaim
