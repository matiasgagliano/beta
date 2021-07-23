import { render, screen } from '@testing-library/react'
import Loading from './loading'

describe('loading component render', () => {
  test('renders loading', () => {
    render(<Loading />)

    const spanElement = screen.getByText('Loading...')

    expect(spanElement).toBeInTheDocument()
  })
})
