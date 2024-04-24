import React from 'react'

import styles from './ticketFilter.module.scss'

const TicketFilter = () => {
  return (
    <div className={styles.container}>
      <button className={`${styles.container__text} ${styles.active}`}>самый дешевый</button>
      <button className={styles.container__text}>самый быстрый </button>
      <button className={`${styles.container__text} `}>оптимальный</button>
    </div>
  )
}

export default TicketFilter
