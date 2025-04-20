import { createEmailCampaign } from '@/services/emailCampaign'
import { CampaignSchema } from '@/utilities/schemas/emailCampaign'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type CampaignForm = z.infer<typeof CampaignSchema>

const useEmailCampaingn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    clearErrors,
    setValue,
  } = useForm<CampaignForm>({
    defaultValues: {
      campaignName: '',
      subjectLine: '',
      emailContent: '',
      senderEmail: '',
    },
    resolver: zodResolver(CampaignSchema),
    reValidateMode: 'onBlur',
  })

  const handleCreateEmailCampaign: SubmitHandler<CampaignForm> = async (
    payload: CampaignForm
  ) => {
    try {
      const response = await createEmailCampaign(payload)

      console.log('Email campaign created successfully:', response)
    } catch (error) {
      console.error('Error creating email campaign:', error)
    }
  }

  const handleResetForm = useCallback(() => {
    reset()
    clearErrors()
  }, [reset, clearErrors])

  return {
    handleCreateEmailCampaign,
    register,
    handleSubmit,
    errors,
    watch,
    setValue,
    handleResetForm,
  }
}

export default useEmailCampaingn
