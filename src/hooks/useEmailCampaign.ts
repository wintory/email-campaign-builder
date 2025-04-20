import { AlertType } from '@/constants/alert'
import { createEmailCampaign } from '@/services/emailCampaign'
import { CampaignSchema } from '@/utilities/schemas/emailCampaign'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import useAlert from './useAlert'

type CampaignForm = z.infer<typeof CampaignSchema>

const useEmailCampaingn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { setShowAlertMessage, alertMessage } = useAlert()
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
      emailContent: 'Enter Content Here',
      senderEmail: '',
    },
    resolver: zodResolver(CampaignSchema),
    reValidateMode: 'onBlur',
  })

  const handleResetForm = useCallback(() => {
    reset()
    clearErrors()
  }, [reset, clearErrors])

  const handleCreateEmailCampaign: SubmitHandler<CampaignForm> = async (
    payload: CampaignForm
  ) => {
    try {
      setIsLoading(true)
      const response = await createEmailCampaign(payload)

      if (response?.status === 200) {
        setShowAlertMessage(
          AlertType.SUCCESS,
          'Email campaign created successfully!'
        )
        console.log('Email campaign created successfully:', response)
        handleResetForm()
      }
    } catch (error) {
      setShowAlertMessage(
        AlertType.ERROR,
        'Error creating email campaign. Please try again.'
      )
      console.error('Error creating email campaign:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handleCreateEmailCampaign,
    register,
    handleSubmit,
    errors,
    watch,
    setValue,
    handleResetForm,
    isLoading,
    alertMessage,
  }
}

export default useEmailCampaingn
