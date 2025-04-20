import Editor from '@/components/Editor'
import FormInput from '@/components/FormInput'
import FullscreenLoader from '@/components/FullScreenLoader'
import { AlertType } from '@/constants/alert'
import useEmailCampaingn from '@/hooks/useEmailCampaign'
import classNames from 'classnames'

const EmailCampaign = () => {
  const {
    handleCreateEmailCampaign,
    register,
    handleSubmit,
    errors,
    setValue,
    handleResetForm,
    watch,
    isLoading,
    alertMessage,
  } = useEmailCampaingn()

  return (
    <>
      <div className="p-5 shadow-md">
        <form
          onSubmit={handleSubmit(handleCreateEmailCampaign)}
          className="mx-auto w-full space-y-2 p-3"
        >
          <p className="pb-3 text-2xl underline">Create Email Campaign</p>
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
      {isLoading ? <FullscreenLoader /> : null}
      {alertMessage ? (
        <div
          role="alert"
          className={classNames(
            'alert fixed right-2 bottom-2 pt-4 text-sm font-bold transition-opacity delay-150 duration-300 ease-in-out',
            {
              'alert-success': alertMessage?.type === AlertType.SUCCESS,
              'alert-error': alertMessage?.type === AlertType.ERROR,
              'opacity-0': !alertMessage,
              'opacity-100': alertMessage,
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{alertMessage?.message}</span>
        </div>
      ) : null}
    </>
  )
}

export default EmailCampaign
