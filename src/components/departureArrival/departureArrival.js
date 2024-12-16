import React from 'react'

import { formatDate, formatDateMinutes } from '../../services/serviceDate/date'
import styles from '../ticketList/ticketList.module.scss'

const DepartureArrival = ({ segments }) => {
  const [one, two] = segments

  return (
    <div className={styles.departure__arrival}>
      <div className={styles.departure}>
        <p>
          {one.origin} - {one.destination}
        </p>
        <p>
          {formatDate(one)} - {formatDateMinutes(one)}
        </p>
      </div>
      <div className={styles.arrival}>
        <p>
          {two.origin} - {two.destination}
        </p>
        <p>
          {formatDate(two)} - {formatDateMinutes(two)}
        </p>
      </div>
    </div>
  )
}

export default DepartureArrival
