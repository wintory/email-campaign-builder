import { z } from 'zod'

export const CampaignSchema = z.object({
  campaignName: z.string().min(1),
  subjectLine: z.string().min(1),
  emailContent: z.string().min(1),
  senderEmail: z.string().email(),
})
