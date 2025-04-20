import { render } from '@testing-library/react'
import FullscreenLoader from './FullScreenLoader'

describe('FullscreenLoader', () => {
  it('renders the loader container', () => {
    const { container } = render(<FullscreenLoader />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
