import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

import DepartureArrival from '../departureArrival/departureArrival'
import FromTo from '../fromTo/fromTo'
import TransferFromTransferTo from '../transferFromTransferTo/transferFromTransferTo'
import './ticketList.scss'

const TicketList = () => {
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
      <div className="ticketItem" key={nanoid()}>
        <div className="price__logo">
          <p className="price">{price} р</p>
          <img src="" alt="" />
        </div>
        <div className="infoTicket">
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
          <button className="showMoreTicket" onClick={showMore}>
            показать ещё 5 билетов!
          </button>
        )}
      </div>
    </>
  )
}

export default TicketList
