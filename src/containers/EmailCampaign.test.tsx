import useEmailCampaingn from '@/hooks/useEmailCampaign'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import EmailCampaign from './EmailCampaign'

jest.mock('@/hooks/useEmailCampaign', () => jest.fn())

describe('EmailCampaign', () => {
  const mockHandleCreateEmailCampaign = jest.fn()
  const mockHandleSubmit = jest.fn((fn) => (e: React.FormEvent) => {
    e.preventDefault()
    fn()
  })
  const mockHandleResetForm = jest.fn()
  const mockSetValue = jest.fn()
  const mockWatch = jest.fn()

  beforeEach(() => {
    ;(useEmailCampaingn as jest.Mock).mockReturnValue({
      handleCreateEmailCampaign: mockHandleCreateEmailCampaign,
      register: jest.fn(() => ({})),
      handleSubmit: mockHandleSubmit,
      errors: {},
      setValue: mockSetValue,
      handleResetForm: mockHandleResetForm,
      watch: mockWatch,
      isLoading: false,
      alertMessage: '',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the form with all inputs and buttons', () => {
    render(<EmailCampaign />)

    expect(screen.getByText('Create Email Campaign')).toBeInTheDocument()
    expect(screen.getByText('Campaign Name')).toBeInTheDocument()
    expect(screen.getByText('Subject Line')).toBeInTheDocument()
    expect(screen.getByText('Sender Email')).toBeInTheDocument()
    expect(screen.getByText('Email Content')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
    expect(screen.getByText('Reset')).toBeInTheDocument()
  })

  it('calls handleCreateEmailCampaign on form submission', () => {
    render(<EmailCampaign />)

    fireEvent.click(screen.getByText('Submit'))

    expect(mockHandleSubmit).toHaveBeenCalled()
    expect(mockHandleCreateEmailCampaign).toHaveBeenCalled()
  })

  it('calls handleResetForm on reset button click', () => {
    render(<EmailCampaign />)

    fireEvent.click(screen.getByText('Reset'))

    expect(mockHandleResetForm).toHaveBeenCalled()
  })

  it('displays the loader when isLoading is true', () => {
    ;(useEmailCampaingn as jest.Mock).mockReturnValueOnce({
      ...useEmailCampaingn(),
      isLoading: true,
    })

    render(<EmailCampaign />)

    expect(screen.getByTestId('fullscreen-loader')).toBeInTheDocument()
  })
})
