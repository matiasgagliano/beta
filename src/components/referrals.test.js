import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import Referrals from './referrals'

const mockStore = configureStore([])

describe('referrals component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      toasts: [],
      wallet: {}
    }

    store = mockStore(initialState)
  })

  test('renders referrals', () => {
    render(
      <Provider store={store}>
        <Referrals />
      </Provider>
    )

    const headerElement = screen.getByText(/Referrals$/i)

    expect(headerElement).toBeInTheDocument()
  })
})
