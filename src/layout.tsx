import { Outlet } from 'react-router-dom'
import { Nav } from './components/nav'
import styles from './layout.module.css'

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />

      {/* gdpr banner because we save a single cookie */}

      <div className={styles.wrapper}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            © divisiontimers.com -&nbsp;
            <a href="//discord.gg/thedivision" className={styles.orange}>
              discord.gg/thedivision
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
