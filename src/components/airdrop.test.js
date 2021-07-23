import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import Airdrop from './airdrop'

const mockStore = configureStore([])

describe('airdrop component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      toasts: [],
      wallet: {}
    }

    store = mockStore(initialState)
  })

  test('renders airdrop', () => {
    render(
      <Provider store={store}>
        <Airdrop />
      </Provider>
    )

    const paragraphElement = screen.getByText(/^Claim your Airdrop/i)

    expect(paragraphElement).toBeInTheDocument()
  })
})
