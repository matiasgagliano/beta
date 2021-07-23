import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import AirdropClaim from './airdropClaim'

const mockStore = configureStore([])

describe('airdrop claim component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      wallet: {}
    }

    store = mockStore(initialState)
  })

  test('renders airdrop claim', () => {
    render(
      <Provider store={store}>
        <AirdropClaim />
      </Provider>
    )

    const titleElement = screen.getByText('Airdrop')

    expect(titleElement).toBeInTheDocument()
  })
})
