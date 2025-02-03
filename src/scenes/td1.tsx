import { Timer } from '../components/timer'
import styles from './styles.module.css'

export function TD1() {
  return (
    <div className={styles.wrapper}>
      <Timer
        name="Vendors, Incursions, Legendaries"
        reference="2019-11-23T00:00:00.00Z"
        reset={['1w']}
      />

      <Timer
        name="Weekly Assignments"
        reference="2019-11-19T00:00:00.00Z"
        reset={['1w']}
      />

      <Timer
        name="Weekly HVT"
        reference="2019-11-22T00:00:00.00Z"
        reset={['1w']}
      />

      <Timer
        name="Dailies"
        reference="2019-11-18T00:00:00.00Z"
        reset={['1d']}
      />
    </div>
  )
}
