import classNames from 'classnames'
import { FC, memo, ReactNode } from 'react'

export interface FormInputProps {
  label: string
  errors?: { message?: string }
  children?: ReactNode
}

const FormInput: FC<FormInputProps> = ({ children, label, errors }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-lg">{label}</legend>
      {children}
      <span
        className={classNames('label w-full text-red-500', {
          invisible: !errors,
        })}
      >
        {errors?.message ?? 'No errors'}
      </span>
    </fieldset>
  )
}

export default memo(FormInput)
