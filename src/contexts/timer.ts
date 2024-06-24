import { createContext, useContext } from 'react'

export const TimerCtx = createContext(0)
export function useTimer() {
  return useContext(TimerCtx)
}
