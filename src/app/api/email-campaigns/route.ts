import { EmailCampaign } from '@/types/emailCampaign'
import { CampaignSchema } from '@/utilities/schemas/emailCampaign'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidV4 } from 'uuid'

export const POST = async (req: Request): Promise<Response> => {
  try {
    const body: EmailCampaign = await req.json()
    const parseResult = CampaignSchema.safeParse(body)

    if (!parseResult.success) {
      return Response.json(
        {
          status: 'error',
          message: 'Validation failed, please check your input',
        },
        { status: 400 }
      )
    }

    const campaignId = 'campaign-' + uuidV4()
    const prisma = new PrismaClient()
    const { campaignName, subjectLine, emailContent, senderEmail } = body

    const newCampaign = await prisma.campaign.create({
      data: {
        campaignId,
        campaignName,
        subjectLine,
        emailContent,
        senderEmail,
      },
    })

    return Response.json({
      status: 'success',
      message: 'Email Campaign Created Successfully',
      data: {
        campaignId: newCampaign?.campaignId,
        campaignName: newCampaign?.campaignName,
      },
    })
  } catch (error) {
    console.error('Error creating campaign:', error)
    return Response.json(
      {
        status: 'error',
        message: 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}

export const GET = async (): Promise<Response> => {
  try {
    const prisma = new PrismaClient()
    const campaigns = await prisma.campaign.findMany()

    return Response.json({
      status: 'success',
      message: 'Email Campaigns Retrieved Successfully',
      data: campaigns.map((campaign) => {
        return {
          ...campaign,
          id: undefined,
        }
      }),
    })
  } catch (error) {
    console.error('Error retrieving campaigns:', error)
    return Response.json(
      {
        status: 'error',
        message: 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}
