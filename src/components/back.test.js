import { render, screen } from '@testing-library/react'
import Back from './back'

test('renders back', () => {
  render(<Back />)

  const linkElement = screen.getByText(/Back/i)

  expect(linkElement).toBeInTheDocument()
})
