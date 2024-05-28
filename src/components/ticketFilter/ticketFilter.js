import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ticketSortPrice, ticketSortDuration, ticketSortOptimal } from '../actions/actions'

import styles from './ticketFilter.module.scss'

const TicketFilter = () => {
  const dispatch = useDispatch()
  const ticketListSort = useSelector(state => state.checkbox.filterTicket)
  const [activeButton, setActiveButton] = useState('')

  const toggleBth = () => {
    const sortPrice = ticketListSort.sort((a, b) => a.price - b.price)
    dispatch(ticketSortPrice(sortPrice))
    setActiveButton('price')
  }

  const getTotalDuration = ticket => {
    return ticket.segments.reduce((total, segment) => total + segment.duration, 0)
  }

  const handleSortByDuration = () => {
    const sortedByDuration = ticketListSort.sort((a, b) => getTotalDuration(a) - getTotalDuration(b))
    dispatch(ticketSortDuration(sortedByDuration))
    setActiveButton('duration')
  }

  const getTotalStops = ticket => {
    return ticket.segments.reduce((total, segment) => total + segment.stops.length, 0)
  }

  const getOptimalScore = ticket => {
    const priceWeight = 1 // Вес цены
    const durationWeight = 0.1 // Вес продолжительности
    const stopsWeight = 10 // Вес пересадок

    const totalPrice = ticket.price * priceWeight
    const totalDuration = getTotalDuration(ticket) * durationWeight
    const totalStops = getTotalStops(ticket) * stopsWeight

    return totalPrice + totalDuration + totalStops
  }

  const handleSortByOptimal = () => {
    const sortedByOptimal = ticketListSort.sort((a, b) => getOptimalScore(a) - getOptimalScore(b))
    dispatch(ticketSortOptimal(sortedByOptimal))
    setActiveButton('optimal')
  }
  const getButtonClass = button => {
    return activeButton === button ? `${styles.container__text} ${styles.active}` : styles.container__text
  }

  return (
    <div className={styles.container}>
      <button onClick={toggleBth} className={getButtonClass('price')}>
        самый дешевый
      </button>
      <button onClick={handleSortByDuration} className={getButtonClass('duration')}>
        самый быстрый{' '}
      </button>
      <button onClick={handleSortByOptimal} className={getButtonClass('optimal')}>
        оптимальный
      </button>
    </div>
  )
}

export default TicketFilter
