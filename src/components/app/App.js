import React from 'react'

import TicketList from '../ticketList/ticketList'
import TicketFilter from '../ticketFilter/ticketFilter'
import TransferCount from '../transferCount/transferCount'
import svg from '../icons/plane.svg'

import styles from './app.module.scss'

function App() {
  return (
    <>
      <div className={styles.containerElement}>
        <img alt="" className={styles.iconPlane} src={svg} />
        <div className={styles.container}>
          <TransferCount />
          <div className={styles.containerTicket}>
            <TicketFilter />
            <TicketList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
