import { CampaignSchema } from './emailCampaign'

describe('CampaignSchema', () => {
  it('should validate a valid campaign object', () => {
    const validCampaign = {
      campaignName: 'Test Campaign',
      subjectLine: 'Test Subject',
      emailContent: 'This is a test email content.',
      senderEmail: 'test@example.com',
    }

    expect(() => CampaignSchema.parse(validCampaign)).not.toThrow()
  })

  it('should throw an error if campaignName is empty', () => {
    const invalidCampaign = {
      campaignName: '',
      subjectLine: 'Test Subject',
      emailContent: 'This is a test email content.',
      senderEmail: 'test@example.com',
    }

    expect(() => CampaignSchema.parse(invalidCampaign)).toThrow()
  })

  it('should throw an error if subjectLine is empty', () => {
    const invalidCampaign = {
      campaignName: 'Test Campaign',
      subjectLine: '',
      emailContent: 'This is a test email content.',
      senderEmail: 'test@example.com',
    }

    expect(() => CampaignSchema.parse(invalidCampaign)).toThrow()
  })

  it('should throw an error if emailContent is empty', () => {
    const invalidCampaign = {
      campaignName: 'Test Campaign',
      subjectLine: 'Test Subject',
      emailContent: '',
      senderEmail: 'test@example.com',
    }

    expect(() => CampaignSchema.parse(invalidCampaign)).toThrow()
  })

  it('should throw an error if senderEmail is not a valid email', () => {
    const invalidCampaign = {
      campaignName: 'Test Campaign',
      subjectLine: 'Test Subject',
      emailContent: 'This is a test email content.',
      senderEmail: 'invalid-email',
    }

    expect(() => CampaignSchema.parse(invalidCampaign)).toThrow()
  })
})
