import { API_URL } from '@/constants/url'
import { EmailCampaign } from '@/types/emailCampaign'
import { AxiosResponse } from 'axios'
import { axiosInstance } from '.'
import { createEmailCampaign } from './emailCampaign'

jest.mock('@/services', () => ({
  axiosInstance: {
    post: jest.fn(),
  },
}))

describe('createEmailCampaign', () => {
  const mockPayload: EmailCampaign = {
    campaignName: 'Test Campaign',
    subjectLine: 'Test Subject',
    emailContent: 'This is a test email content.',
    senderEmail: 'test@example.com',
  }

  const mockResponse = {
    data: {
      status: 'success',
      message: 'Campaign created successfully',
      data: {
        campaignId: '12345',
      },
    },
    status: 200,
    statusText: 'OK',
  } as AxiosResponse

  it('should successfully create an email campaign', async () => {
    ;(axiosInstance.post as jest.Mock).mockResolvedValueOnce(mockResponse)

    const response = await createEmailCampaign(mockPayload)

    expect(axiosInstance.post).toHaveBeenCalledWith(
      API_URL.EMAIL_CAMPAIGN,
      mockPayload
    )

    expect(response).toEqual(mockResponse)
  })
})
