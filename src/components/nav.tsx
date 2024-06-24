import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <ul className="text-2xl mt-4">
      <div className="flex flex-row gap-4 justify-center items-center">
        <div>
          <li>
            <Link to="/" className="text-orange">
              TD2
            </Link>
          </li>
        </div>

        <div>
          <li>
            <Link to="/" className="text-orange">
              <img src="timers-24.svg" width="50" alt="logo" />
            </Link>
          </li>
        </div>

        <div>
          <li>
            <Link to="/td1" className="text-orange">
              TD1
            </Link>
          </li>
        </div>
      </div>
    </ul>
  )
}
