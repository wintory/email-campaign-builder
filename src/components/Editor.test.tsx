import { render } from '@testing-library/react'
import Editor from './Editor'

describe('Editor Component', () => {
  it('renders ReactQuill editor', () => {
    const { container } = render(<Editor value="" onChange={jest.fn()} />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
