import { Link } from 'react-router-dom'
import styles from './nav.module.css'

export function Nav() {
  return (
    <div className={styles.nav}>
      <div>
        <Link to="/" className={styles.orange}>
          TD2
        </Link>
      </div>

      <div>
        <Link to="/" className={styles.orange}>
          <img src="timers-24.svg" width="50" height="50" alt="logo" />
        </Link>
      </div>

      <div>
        <Link to="/td1" className={styles.orange}>
          TD1
        </Link>
      </div>
    </div>
  )
}
