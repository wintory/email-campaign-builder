import { CampaignSchema } from '@/utilities/schemas/emailCampaign'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type CampaignForm = z.infer<typeof CampaignSchema>

const useEmailCampaingn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CampaignForm>({
    resolver: zodResolver(CampaignSchema),
  })

  const createEmailCampaign = async () => {}

  return { createEmailCampaign, register, handleSubmit, errors, reset }
}

export default useEmailCampaingn
