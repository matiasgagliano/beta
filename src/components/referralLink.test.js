import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import ReferralLink from './referralLink'

const mockStore = configureStore([])

describe('referral link component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      wallet: {}
    }

    store = mockStore(initialState)
  })

  test('renders referral link', () => {
    render(
      <Provider store={store}>
        <ReferralLink />
      </Provider>
    )

    const copyButton = screen.getByText('Copy')

    expect(copyButton).toBeInTheDocument()
  })
})
