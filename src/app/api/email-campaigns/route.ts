import { v4 as uuidV4 } from 'uuid'
import { CampaignSchema } from './schema'

export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const parseResult = CampaignSchema.safeParse(body)

    if (!parseResult.success) {
      return Response.json(
        {
          message: 'Validation failed, please check your input',
        },
        { status: 400 }
      )
    }

    const campaignId = 'campaign-' + uuidV4()

    return Response.json({
      message: 'Email Campaign Created Successfully',
      data: { campaignId },
    })
  } catch (error) {
    console.error('Error creating campaign:', error)
    return Response.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}
