import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import AirdropUnlock from './airdropUnlock'

const mockStore = configureStore([])

describe('airdrop unlock component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      wallet: {}
    }

    store = mockStore(initialState)
  })

  test('renders airdrop unlock', () => {
    render(
      <Provider store={store}>
        <AirdropUnlock />
      </Provider>
    )

    const unlockButton = screen.getByText('Unlock')

    expect(unlockButton).toBeInTheDocument()
  })
})
