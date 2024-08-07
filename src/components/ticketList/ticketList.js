import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import DepartureArrival from '../departureArrival/departureArrival'
import FromTo from '../fromTo/fromTo'
import TransferFromTransferTo from '../transferFromTransferTo/transferFromTransferTo'
import { showMoreTickets } from '../../actions/actions'

import styles from './ticketList.module.scss'

const TicketList = () => {
  const tickets = useSelector(state => state.tickets.visibleTickets)
  const dispatch = useDispatch()
  const numberOfVisible = useSelector(state => state.numberOfVisible)

  if (!tickets || tickets.length === 0) {
    return <p className={styles.notTicket}>Нет билетов соответствующих вашим фильтрам</p>
  }

  const handleShowMore = () => {
    dispatch(showMoreTickets())
  }

  const renderTicket = (ticket, index) => {
    const { price, segments, carrier } = ticket
    const [one, two] = segments
    const logoUrl = `//pics.avs.io/99/36/${carrier}.png`

    return (
      <div className={styles.ticketItem} key={index}>
        <div className={styles.price__logo}>
          <p className={styles.price}>{price} р</p>
          <img className={styles.logo} src={logoUrl} alt={carrier} />
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
    <div>
      {tickets.slice(0, numberOfVisible).map(renderTicket)}
      <button className={styles.showMoreTicket} onClick={handleShowMore}>
        показать ещё 5 билетов!
      </button>
    </div>
  )
}

export default TicketList
