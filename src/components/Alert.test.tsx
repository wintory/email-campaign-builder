import { AlertType } from '@/constants/alert'
import { render, screen } from '@testing-library/react'
import Alert, { AlertProps } from './Alert'

describe('Alert Component', () => {
  it('renders the alert message with success type', () => {
    const props: AlertProps = {
      alertMessage: {
        type: AlertType.SUCCESS,
        message: 'Operation successful',
      },
    }

    render(<Alert {...props} />)

    expect(screen.getByText('Operation successful')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveClass('alert-success')
  })

  it('renders the alert message with error type', () => {
    const props: AlertProps = {
      alertMessage: {
        type: AlertType.ERROR,
        message: 'Operation failed',
      },
    }

    render(<Alert {...props} />)

    expect(screen.getByText('Operation failed')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveClass('alert-error')
  })
})
