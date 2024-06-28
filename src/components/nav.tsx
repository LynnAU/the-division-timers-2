import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <div className="flex flex-row gap-4 justify-center items-center text-2xl mt-4">
      <div>
        <Link to="/" className="text-orange">
          TD2
        </Link>
      </div>

      <div>
        <Link to="/" className="text-orange">
          <img src="timers-24.svg" width="50" height="50" alt="logo" />
        </Link>
      </div>

      <div>
        <Link to="/td1" className="text-orange">
          TD1
        </Link>
      </div>
    </div>
  )
}
