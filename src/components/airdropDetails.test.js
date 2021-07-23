import { render, screen } from '@testing-library/react'
import AirdropDetails from './airdropDetails'

describe('airdrop details component render', () => {
  test('renders airdrop details', () => {
    render(<AirdropDetails />)

    const paragraphElement = screen.getByText(/^There are no pending airdrops/)

    expect(paragraphElement).toBeInTheDocument()
  })
})
