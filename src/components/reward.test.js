import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import Reward from './reward'

const mockStore = configureStore([])

describe('Reward component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      vaults: {
        value: []
      },
      wallet: {
        chainId: 80001
      }
    }

    store = mockStore(initialState)
  })

  test('renders Reward', () => {
    render(
      <Provider store={store}>
        <Reward />
      </Provider>
    )

    const buttonElement = screen.getByText(/Claim/i)

    expect(buttonElement).toBeInTheDocument()
  })
})
