import React from 'react'

import styles from '../ticketList/ticketList.module.scss'

const TransferFromTransferTo = ({ segments }) => {
  let maxId = 0
  const generateIncrementalId = () => {
    return ++maxId
  }
  const [one, two] = segments

  const stopsFromFirstDeparture = one.stops.map(item => <p key={generateIncrementalId()}>{item}</p>)
  const numberOfStopsFromFirstDeparture = stopsFromFirstDeparture.length

  const stopsFromSecondDeparture = two.stops.map(item => <p key={generateIncrementalId()}>{item}</p>)
  const numberOfStopsFromSecondDeparture = stopsFromSecondDeparture.length
  return (
    <div className={styles.transferFrom__transferTo}>
      <div className={styles.transferFrom}>
        <p className={styles.counterTransfer}>{numberOfStopsFromFirstDeparture} пересадок</p>
        <div className={styles.transfer}>{stopsFromFirstDeparture}</div>
      </div>
      <div className={styles.transferTo}>
        <p className={styles.counterTransfer}>{numberOfStopsFromSecondDeparture} пересадок</p>
        <div className={styles.transfer}>{stopsFromSecondDeparture}</div>
      </div>
    </div>
  )
}

export default TransferFromTransferTo
