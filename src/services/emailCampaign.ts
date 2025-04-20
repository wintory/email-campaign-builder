import { API_URL } from '@/constants/url'
import { EmailCampaign } from '@/types/emailCampaign'
import { axiosInstance } from '.'

export const getAllEmailCampaigns = async () => {}

export const createEmailCampaign = async (payload: EmailCampaign) => {
  try {
    const response = await axiosInstance.post(API_URL.EMAIL_CAMPAIGN, {
      body: payload,
    })

    return response.data
  } catch (error: unknown) {
    console.error('Error creating email campaign', error)
    throw error
  }
}
