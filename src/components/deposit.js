import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BigNumber from 'bignumber.js'
import { fromWei, toWei } from '../helpers/wei'
import { fetchVaultsDataAsync, newVaultFetch } from '../features/vaultsSlice'
import { toastAdded, toastDestroyed } from '../features/toastsSlice'
import { decimalPlaces, formatAmount, toWeiFormatted } from '../helpers/format'
import { transactionSent } from '../helpers/transactions'
import { selectChainId } from '../features/walletSlice'
import { ZERO_ADDRESS } from '../data/constants'

const Deposit = props => {
  const chainId                         = useSelector(selectChainId)
  const dispatch                        = useDispatch()
  const [referral, setReferral]         = useState('')
  const [deposit, setDeposit]           = useState('')
  const [useAll, setUseAll]             = useState(false)
  const [depositLabel, setDepositLabel] = useState('Deposit')
  const [status, setStatus]             = useState('blank')

  useEffect(() => {
    setReferral(localStorage.getItem('referral') || ZERO_ADDRESS)
  }, [])

  useEffect(() => {
    if (status !== 'deposit') {
      if (/^\d*\.?\d*$/.test(deposit) && +deposit) {
        const amount = toWei(new BigNumber(deposit), props.decimals)

        setStatus(props.balance.comparedTo(amount) >= 0 ? 'valid' : 'invalid')
      } else {
        setStatus('invalid')
      }
    }
  }, [deposit, status, props.balance, props.decimals])

  const onChange = e => {
    const value = e.target.value

    if (status === 'deposit') {
      setStatus('invalid')
    }

    setUseAll(false)
    setDeposit(value)
  }

  const handleDepositClick = () => {
    const vaultContract = props.vaultContract()
    let   amount        = toWeiFormatted(new BigNumber(deposit), props.decimals)

    setDepositLabel('Deposit...')
    setStatus('deposit')

    let call

    // Native Matic vault
    if (vaultContract.methods.depositMATIC) {
      call = vaultContract.methods.depositMATIC().send({
        from:  props.address,
        value: amount
      })
    } else if (chainId === 80001) {
      call = vaultContract.methods.deposit(props.pid, amount, referral).send({
        from: props.address
      })
    } else {
      call = vaultContract.methods.deposit(amount).send({ from: props.address })
    }

    call.on('transactionHash', hash => {
      transactionSent(hash, dispatch)
    }).then(() => {
      setDeposit('')
      setStatus('blank')
      setDepositLabel('Deposit')
      dispatch(toastDestroyed('Deposit rejected'))
      dispatch(newVaultFetch())
      dispatch(fetchVaultsDataAsync())
      dispatch(
        toastAdded({
          title:    'Deposit approved',
          body:     'Your deposit was successful',
          icon:     'check-circle',
          style:    'success',
          autohide: true
        })
      )
    }).catch(() => {
      setStatus('blank')
      setDepositLabel('Deposit')
      dispatch(
        toastAdded({
          title:    'Deposit rejected',
          body:     'Your deposit has been rejected, please check the explorer and try again',
          icon:     'exclamation-triangle',
          style:    'danger',
          autohide: true
        })
      )
    })
  }

  const handleDepositAllClick = () => {
    const vaultContract = props.vaultContract()

    setMax()
    setDepositLabel('Deposit...')
    setStatus('deposit')

    let call

    if (vaultContract.methods.depositMATIC) {
      let amount = maxMaticDepositAmount(props.balance)

      if (!amount)
        return

      call = vaultContract.methods.depositMATIC().send({
        from: props.address, value: amount.toFixed()
      })
    } else if (chainId === 80001) {
      call = vaultContract.methods.depositAll(props.pid).send({
        from: props.address
      })
    } else {
      call = vaultContract.methods.depositAll().send({ from: props.address })
    }

    call.on('transactionHash', hash => {
      transactionSent(hash, dispatch)
    }).then(() => {
      setDeposit('')
      setStatus('blank')
      setDepositLabel('Deposit')
      dispatch(toastDestroyed('Deposit all rejected'))
      dispatch(newVaultFetch())
      dispatch(fetchVaultsDataAsync())
      dispatch(
        toastAdded({
          title:    'Deposit all approved',
          body:     'Your deposit was successful',
          icon:     'check-circle',
          style:    'success',
          autohide: true
        })
      )
    }).catch(error => {
      setDepositLabel('Deposit')
      setStatus('blank')
      dispatch(
        toastAdded({
          title:    'Deposit all rejected',
          body:     error.message,
          icon:     'exclamation-triangle',
          style:    'danger',
          autohide: true
        })
      )
    })
  }

  const setMax = () => {
    const places       = decimalPlaces(props.decimals)
    const roundingMode = BigNumber.ROUND_DOWN

    setUseAll(true)
    setDeposit(
      fromWei(props.balance, props.decimals).toFixed(places, roundingMode)
    )
  }

  const balanceId = () => `balance-${props.token}`

  const maxMaticDepositAmount = amount => {
    const reserve = new BigNumber(0.025e18)

    if (amount.comparedTo(reserve) > 0)
      return amount.minus(reserve)
    else {
      setDepositLabel('Deposit')
      setStatus('blank')
      dispatch(
        toastAdded({
          title:    'Deposit all rejected',
          body:     'Deposit should be greater than 0.025 MATIC',
          icon:     'exclamation-triangle',
          style:    'danger',
          autohide: true
        })
      )
    }
  }

  return (
    <React.Fragment>
      <div className="input-group mb-1">
        <input type="number"
               className="form-control"
               id={balanceId()}
               onKeyDown={e => onChange(e) && e.preventDefault()}
               onChange={onChange}
               value={deposit} />
        <button type="button"
                className="btn btn-link bg-input"
                disabled={props.balance?.isZero() || useAll}
                onClick={setMax}>
          Max
        </button>
      </div>

      <div className="text-end">
        <label className="small text-uppercase text-decoration-underline-dotted cursor-pointer"
               htmlFor={balanceId()}
               onClick={setMax}>
          Wallet balance: {formatAmount(fromWei(props.balance, props.decimals), '', 8)} {props.symbol}
        </label>
      </div>

      <hr className="border border-primary border-1 opacity-100" />

      <div className="row justify-content-center mt-4 mb-3">
        <div className="col-lg-6">
          <div className="d-grid gap-2 mb-3 mb-lg-0">
            <button type="button"
                    className="btn btn-outline-primary bg-dark text-white fw-bold"
                    disabled={status !== 'valid'}
                    onClick={useAll ? handleDepositAllClick : handleDepositClick}>
              {depositLabel}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Deposit.propTypes = {
  address:       PropTypes.string.isRequired,
  balance:       PropTypes.object.isRequired,
  decimals:      PropTypes.object.isRequired,
  pid:           PropTypes.string.isRequired,
  symbol:        PropTypes.string.isRequired,
  token:         PropTypes.string.isRequired,
  vaultContract: PropTypes.func.isRequired
}

export default Deposit
