import { render, screen } from '@testing-library/react'
import ReferralButton from './referralButton'

describe('referral button component render', () => {
  test('renders referral button link', () => {
    render(<ReferralButton />)

    const buttonElement = screen.getByText(/Referrals/i)

    expect(buttonElement).toBeInTheDocument()
  })
})
