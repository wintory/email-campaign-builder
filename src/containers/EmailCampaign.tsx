import Editor from '@/components/Editor'
import FormInput from '@/components/FormInput'
import useEmailCampaingn from '@/hooks/useEmailCampaign'

const EmailCampaign = () => {
  const {
    handleCreateEmailCampaign,
    register,
    handleSubmit,
    errors,
    setValue,
    handleResetForm,
    watch,
  } = useEmailCampaingn()

  return (
    <div className="p-5 shadow-md">
      <form
        onSubmit={handleSubmit(handleCreateEmailCampaign)}
        className="mx-auto w-full space-y-2 p-3"
      >
        <p className="pb-3 text-2xl">Create Email Campaign</p>
        <FormInput label="Campaign Name" errors={errors?.campaignName}>
          <input
            {...register('campaignName')}
            placeholder="Enter Campaign Name"
            className="input w-full border p-2"
          />
        </FormInput>
        <FormInput label="Subject Line" errors={errors?.subjectLine}>
          <input
            {...register('subjectLine')}
            placeholder="Enter Subject Line"
            className="input w-full border p-2"
          />
        </FormInput>
        <FormInput label="Sender Email" errors={errors?.senderEmail}>
          <input
            {...register('senderEmail')}
            placeholder="Enter Sender Email"
            className="input w-full border p-2"
          />
        </FormInput>
        <FormInput label="Email Content" errors={errors?.emailContent}>
          <Editor
            value={watch('emailContent')}
            onChange={(content) => setValue('emailContent', content)}
          />
        </FormInput>
        <div className="flex justify-center gap-3 py-3">
          <button
            type="submit"
            className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white"
          >
            Submit
          </button>
          <button
            type="reset"
            className="cursor-pointer rounded px-4 py-2"
            onClick={handleResetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default EmailCampaign
