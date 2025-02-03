import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TaskTimer } from 'tasktimer'
import { TimerCtx } from './contexts/timer'
import Routes from './routes'

const Router = createBrowserRouter(Routes)

export default function App() {
  const [elapsed, SetElapsed] = useState(0)

  useEffect(() => {
    const timer = new TaskTimer(1000)
    timer.on('tick', () => SetElapsed(timer.time.elapsed))
    timer.start()

    return () => {
      timer.stop()
    }
  }, [])

  return (
    <TimerCtx.Provider value={elapsed}>
      <main>
        <RouterProvider router={Router} />
      </main>
    </TimerCtx.Provider>
  )
}
