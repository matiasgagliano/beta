import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Vault from './vault'

const mockStore = configureMockStore([thunk])

describe('new vault component render', () => {
  let store

  beforeEach(() => {
    const initialState = {
      toasts: [],
      vaults: {
        value: {
          137: [
            {
              key:    'dai',
              pid:    '0',
              pool:   'aave',
              symbol: 'DAI',
              token:  'dai'
            }
          ]
        }
      },
      wallet: {
        chainId: 137
      }
    }

    store = mockStore(initialState)
  })

  test('renders new vault', () => {
    const props = {
      id:     'dai',
      symbol: 'DAI'
    }

    render(
      <Provider store={store}>
        <Vault {...props} />
      </Provider>
    )

    const titleElement = screen.getByText(props.symbol)

    expect(titleElement).toBeInTheDocument()
  })
})
