import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TD2 } from './scenes/td2'
import Layout from './layout'
import { useEffect, useState } from 'react'
import { TimerCtx } from './contexts/timer'
import { TaskTimer } from 'tasktimer'
import { TD1 } from './scenes/td1'

const Routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TD2 />,
      },
      {
        path: '/td1',
        element: <TD1 />,
      },
    ],
  },
]

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
