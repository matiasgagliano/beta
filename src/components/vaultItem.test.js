import { render, screen } from '@testing-library/react'
import VaultItem from './vaultItem'

test('renders vault', () => {
  const props = {
    apy:          undefined,
    balance:      undefined,
    balanceUsd:   undefined,
    color:        'info',
    decimals:     undefined,
    deposited:    undefined,
    depositedUsd: undefined,
    earn:         'xDAI',
    symbol:       'DAI',
    token:        'dai',
    tvlUsd:       undefined,
    uses:         'aave',
    vaultKey:     'dai'
  }

  render(<VaultItem {...props}/>)

  const tokenHeaderElement = screen.getByText(props.symbol)
  const usesHeaderElement  = screen.getByText(props.uses)

  expect(tokenHeaderElement).toBeInTheDocument()
  expect(usesHeaderElement).toBeInTheDocument()
})
