import { render } from '@testing-library/react'
import CreateCampaign from './page'

describe('CreateCampaign', () => {
  it('renders the Campaign component', () => {
    const { container } = render(<CreateCampaign />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
