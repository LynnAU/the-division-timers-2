import { Timer } from '../components/timer'
import styles from './styles.module.css'

export function TD2() {
  return (
    <div className={styles.wrapper}>
      <Timer
        name="Invasions, Vendors, Raid(s™), Weekly Projects/Bounties"
        reference="2019-11-19T08:00:00.00Z"
        reset={['1w']}
      />

      <Timer
        name="Targeted Loot, Daily Projects/Bounties"
        reference="2019-11-17T08:00:00.00Z"
        reset={['1d']}
      />

      <Timer
        name="Cassie"
        reference="2019-12-18T08:00:00.00Z"
        reset={['1d']}
        resetText="open for"
        offset={['1d', '8h']}
        offsetText="is closed for"
      />

      <Timer
        name="Incursion"
        reference="2024-02-05T08:00:00.00Z"
        reset={['1w']}
      />

      <Timer
        name="Kenly College"
        reference="2024-02-06T08:00:00.00Z"
        reset={['1w']}
        resetText="open for"
        offset={['3w']}
        offsetText="is closed for"
      />
    </div>
  )
}
