import { Outlet } from 'react-router-dom'
import { Nav } from './components/nav'

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />

      {/* gdpr banner because we save a single cookie */}

      <div className="mt-7">
        <div className="my-auto mx-auto text-center">
          <div className="flex justify-center">
            © divisiontimers.com -&nbsp;
            <a href="//discord.gg/thedivision" className="text-orange">
              discord.gg/thedivision
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
