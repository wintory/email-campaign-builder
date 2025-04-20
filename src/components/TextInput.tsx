import classNames from 'classnames'
import { FC, memo } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface TextInputProps {
  register: UseFormRegister<Record<string, string | number | boolean>>
  fieldName: string
  label: string
  placeholder: string
  errors?: { message?: string }
  className?: string
}

const TextInput: FC<TextInputProps> = ({
  register,
  fieldName,
  label,
  placeholder,
  errors,
}) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-lg">{label}</legend>
      <input
        {...register(fieldName)}
        id={fieldName}
        name={fieldName}
        type="text"
        className="input"
        placeholder={placeholder}
      />
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

export default memo(TextInput)
