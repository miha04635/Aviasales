import React from 'react'
import './ticketItem.scss'

import styles from './ticketItem.module.scss'

const TicketItem = () => {
  return (
    <>
      <div className={styles.ticketItem}>
        <div className={styles.price__logo}>
          <p className={styles.price}>13 400 р</p>
        </div>
        <div className={styles.infoTicket}>
          <div className={styles.departure__arrival}>
            <div className={styles.departure}>
              <p>mow - hkt</p>
              <p>10:45 - 08:00</p>
            </div>
            <div className={styles.arrival}>
              <p>mow - hkt</p>
              <p>10:45 - 08:00</p>
            </div>
          </div>
          <div className={styles.from__to}>
            <div className={styles.onTheWayFrom}>
              <p>в пути</p>
              <p>21ч 15м</p>
            </div>
            <div className={styles.onTheWayTo}>
              <p>в пути</p>
              <p>13ч 30м</p>
            </div>
          </div>
          <div className={styles.transferFrom__transferTo}>
            <div className={styles.transferFrom}>
              <p>2 пересадки</p>
              <p>hkg, jnb</p>
            </div>
            <div className={styles.transferTo}>
              <p>1 пересадка</p>
              <p>hkg</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.showMoreTicket}>показать ещё 5 билетов!</button>
    </>
  )
}

export default TicketItem
