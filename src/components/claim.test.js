import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import Claim from './claim'

const mockStore = configureStore([])

describe('vault claim component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      wallet: {}
    }

    store = mockStore(initialState)
  })

  test('renders vault claim', () => {
    const props = {
      vault: {
        key: 'dai',
        pid: '0'
      }
    }

    render(
      <Provider store={store}>
        <Claim {...props} />
      </Provider>
    )

    const titleElement = screen.getByText('2pi earned')

    expect(titleElement).toBeInTheDocument()
  })
})
