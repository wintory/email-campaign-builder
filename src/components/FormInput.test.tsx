import { render, screen } from '@testing-library/react'
import FormInput, { FormInputProps } from './FormInput'

describe('FormInput Component', () => {
  const defaultProps: FormInputProps = {
    label: 'Test Label',
  }

  it('renders the label correctly', () => {
    render(<FormInput {...defaultProps} />)

    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(
      <FormInput {...defaultProps}>
        <input type="text" data-testid="child-input" />
      </FormInput>
    )

    expect(screen.getByTestId('child-input')).toBeInTheDocument()
  })

  it('displays error message when errors are provided', () => {
    const errorProps: FormInputProps = {
      ...defaultProps,
      errors: { message: 'This is an error' },
    }

    render(<FormInput {...errorProps} />)

    expect(screen.getByText('This is an error')).toBeInTheDocument()
    expect(screen.getByText('This is an error')).not.toHaveClass('invisible')
  })

  it('hides error message when no errors are provided', () => {
    render(<FormInput {...defaultProps} />)

    const errorMessage = screen.getByText('No errors')

    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('invisible')
  })
})
