import { AlertType } from '@/constants/alert'
import { act, renderHook } from '@testing-library/react'
import useAlert from './useAlert'

jest.useFakeTimers()

describe('useAlert', () => {
  it('should initialize with undefined alertMessage', () => {
    const { result } = renderHook(() => useAlert())

    expect(result.current.alertMessage).toBeUndefined()
  })

  it('should set alertMessage when setShowAlertMessage is called', () => {
    const { result } = renderHook(() => useAlert())
    const alertType = AlertType.SUCCESS
    const alertMessage = 'This is a test alert'

    act(() => {
      result.current.setShowAlertMessage(alertType, alertMessage)
    })

    expect(result.current.alertMessage).toEqual({
      type: alertType,
      message: alertMessage,
    })
  })

  it('should clear alertMessage after ALERT_TIME_MS', () => {
    const { result } = renderHook(() => useAlert())
    const alertType = AlertType.ERROR
    const alertMessage = 'This is another test alert'

    act(() => {
      result.current.setShowAlertMessage(alertType, alertMessage)
    })

    expect(result.current.alertMessage).toEqual({
      type: alertType,
      message: alertMessage,
    })

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(result.current.alertMessage).toBeUndefined()
  })
})
