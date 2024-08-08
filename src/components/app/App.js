import React from 'react'
import { useSelector } from 'react-redux'
import { Spin, Flex } from 'antd'

import TicketList from '../ticketList/ticketList'
import TicketFilter from '../ticketFilter/ticketFilter'
import TransferCount from '../transferCount/transferCount'
import useFetchDataTicket from '../../services/servicesTicket'
import svg from '../icons/plane.svg'

import styles from './app.module.scss'

function App() {
  const loader = useSelector(state => state.ticket.stop)

  useFetchDataTicket()
  return (
    <>
      <div className={styles.containerElement}>
        <img alt="" className={styles.iconPlane} src={svg} />
        <div className={styles.container}>
          <TransferCount />
          <div className={styles.containerTicket}>
            <TicketFilter />
            {loader === false ? (
              <Flex justify="center">
                <Spin />
              </Flex>
            ) : (
              <TicketList />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
