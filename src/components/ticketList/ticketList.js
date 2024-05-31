import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import DepartureArrival from '../departureArrival/departureArrival'
import FromTo from '../fromTo/fromTo'
import TransferFromTransferTo from '../transferFromTransferTo/transferFromTransferTo'

import styles from './ticketList.module.scss'

const TicketList = () => {
  let maxId = 100

  const generateIncrementalId = () => {
    return ++maxId
  }
  const ticket = useSelector(state => state.checkbox.filterTicket)
  const [visibleCount, setVisibleCount] = useState(5)

  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 5)
  }

  if (!ticket) {
    return null
  }

  const ticketArray = ticket

  const renderTicket = el => {
    const { price, segments } = el

    const [one, two] = segments

    return (
      <div className={styles.ticketItem} key={generateIncrementalId()}>
        <div className={styles.price__logo}>
          <p className={styles.price}>{price} р</p>
          <img src="" alt="" />
        </div>
        <div className={styles.infoTicket}>
          <DepartureArrival segments={[one, two]} />
          <FromTo segments={[one, two]} />
          <TransferFromTransferTo segments={[one, two]} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div>
        {ticketArray.slice(0, visibleCount).map(renderTicket)}
        {visibleCount < ticketArray.length && (
          <button className={styles.showMoreTicket} onClick={showMore}>
            показать ещё 5 билетов!
          </button>
        )}
      </div>
    </>
  )
}

export default TicketList
