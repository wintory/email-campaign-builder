import { API_URL } from '@/constants/url'
import { EmailCampaign } from '@/types/emailCampaign'
import { AxiosResponse } from 'axios'
import { axiosInstance } from '.'

interface EmailCampaignResponse {
  status: string
  message: string
  data: {
    campaignId: string
  }
}

export const getAllEmailCampaigns = async () => {}

export const createEmailCampaign = async (
  payload: EmailCampaign
): Promise<Readonly<AxiosResponse<EmailCampaignResponse>>> => {
  try {
    const response = await axiosInstance.post(API_URL.EMAIL_CAMPAIGN, payload)

    return response
  } catch (error: unknown) {
    console.error('Error creating email campaign', error)
    throw error
  }
}
