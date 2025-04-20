import TextInput from '@/components/TextInput'
import useEmailCampaingn from '@/hooks/useEmailCampaign'

const EmailCampaign = () => {
  const { createEmailCampaign, register, handleSubmit, errors, reset } =
    useEmailCampaingn()

  return (
    <div className="rounded-xl border-2 border-gray-300 p-5 shadow-md">
      <form
        onSubmit={handleSubmit(createEmailCampaign)}
        className="mx-auto w-full space-y-2 p-3"
      >
        <p className="pb-3 text-2xl">Create Email Campaign</p>
        <TextInput
          label="Campaign Name"
          placeholder="Enter Campaign Name"
          fieldName="campaignName"
          register={register}
          errors={errors?.campaignName}
        />
        <TextInput
          label="Subject Line"
          placeholder="Enter Subject Line"
          fieldName="subjectLine"
          register={register}
          errors={errors?.subjectLine}
        />
        <TextInput
          label="Sender Email"
          placeholder="Sender Email"
          fieldName="senderEmail"
          register={register}
          errors={errors?.senderEmail}
        />
        <div className="flex justify-center gap-3">
          <button
            type="submit"
            className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white"
          >
            Submit
          </button>
          <button
            type="reset"
            className="cursor-pointer rounded px-4 py-2"
            onClick={() => {
              reset()
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default EmailCampaign
