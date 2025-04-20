import { render } from '@testing-library/react'
import Layout from './layout'

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    )

    expect(getByText('Test Child')).toBeInTheDocument()
  })
})
