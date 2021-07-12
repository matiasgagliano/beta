import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import Referral from './referral'

const mockStore = configureStore([])

describe('connected referral component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      wallet: {
        address:  '0x06012c8cf97bead5deae237070f9587f8e7a266d',
        chainId:  80001,
        provider: undefined,
        status:   'success',
        web3:     undefined
      }
    }

    store = mockStore(initialState)
  })

  test('renders referral with connected account', () => {
    render(
      <Provider store={store}>
        <Referral />
      </Provider>
    )

    const copyButton = screen.getByText('Copy')

    expect(copyButton).toBeInTheDocument()
  })
})

describe('disconnected referral component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      wallet: {}
    }

    store = mockStore(initialState)
  })

  test('renders referral', () => {
    render(
      <Provider store={store}>
        <Referral />
      </Provider>
    )

    const unlockButton = screen.getByText('Unlock')

    expect(unlockButton).toBeInTheDocument()
  })
})
