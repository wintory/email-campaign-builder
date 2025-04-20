import { AlertType } from '@/constants/alert'
import { createEmailCampaign } from '@/services/emailCampaign'
import { act, renderHook } from '@testing-library/react'
import useAlert from './useAlert'
import useEmailCampaingn from './useEmailCampaign'

jest.mock('@/services/emailCampaign', () => ({
  createEmailCampaign: jest.fn(),
}))

jest.mock('./useAlert', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    setShowAlertMessage: jest.fn(),
    alertMessage: null,
  })),
}))

describe('useEmailCampaingn', () => {
  const mockSetShowAlertMessage = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useAlert as jest.Mock).mockReturnValue({
      setShowAlertMessage: mockSetShowAlertMessage,
      alertMessage: null,
    })
  })

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useEmailCampaingn())

    expect(result.current.isLoading).toBe(false)
    expect(result.current.errors).toEqual({})
    expect(result.current.alertMessage).toBeNull()
  })

  it('should reset the form and clear errors when handleResetForm is called', () => {
    const { result } = renderHook(() => useEmailCampaingn())

    act(() => {
      result.current.handleResetForm()
    })

    expect(result.current.errors).toEqual({})
  })

  it('should call createEmailCampaign and show success alert on successful submission', async () => {
    const mockResponse = { status: 200 }
    ;(createEmailCampaign as jest.Mock).mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useEmailCampaingn())

    await act(async () => {
      await result.current.handleCreateEmailCampaign({
        campaignName: 'Test Campaign',
        subjectLine: 'Test Subject',
        emailContent: 'Test Content',
        senderEmail: 'test@example.com',
      })
    })

    expect(createEmailCampaign).toHaveBeenCalledWith({
      campaignName: 'Test Campaign',
      subjectLine: 'Test Subject',
      emailContent: 'Test Content',
      senderEmail: 'test@example.com',
    })
    expect(mockSetShowAlertMessage).toHaveBeenCalledWith(
      AlertType.SUCCESS,
      'Email campaign created successfully!'
    )
    expect(result.current.isLoading).toBe(false)
  })
})
