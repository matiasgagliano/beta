import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import ReferralUnlock from './referralUnlock'

const mockStore = configureStore([])

describe('referral unlock component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      wallet: {}
    }

    store = mockStore(initialState)
  })

  test('renders referral unlock', () => {
    render(
      <Provider store={store}>
        <ReferralUnlock />
      </Provider>
    )

    const unlockButton = screen.getByText('Unlock')

    expect(unlockButton).toBeInTheDocument()
  })
})
