import { AlertType } from '@/constants/alert'
import classNames from 'classnames'
import { FC } from 'react'

export interface AlertProps {
  alertMessage?: {
    type: AlertType
    message: string
  }
}

const Alert: FC<AlertProps> = ({ alertMessage }) => {
  return (
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
  )
}

export default Alert
