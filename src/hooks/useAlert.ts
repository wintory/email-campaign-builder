import { ALERT_TIME_MS, AlertType } from '@/constants/alert'
import { useState } from 'react'

const useAlert = () => {
  const [alertMessage, setAlertMessage] = useState<{
    type: AlertType
    message: string
  }>()

  const setShowAlertMessage = (type: AlertType, message: string) => {
    setAlertMessage({ type, message })

    setTimeout(() => {
      setAlertMessage(undefined)
    }, ALERT_TIME_MS)
  }

  return { setShowAlertMessage, alertMessage }
}

export default useAlert
