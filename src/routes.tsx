import Layout from './layout'
import { TD1 } from './scenes/td1'
import { TD2 } from './scenes/td2'

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
export default Routes
