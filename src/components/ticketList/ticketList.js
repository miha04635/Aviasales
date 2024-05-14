import React from 'react'
import { useSelector } from 'react-redux'
import { addMinutes, format } from 'date-fns'
import { nanoid } from 'nanoid'

import useFetchDataTicket from '../../services/servicesTicket'

import './ticketList.scss'

const TicketList = () => {
  const ticket = useSelector(state => state.ticket.ticket)

  useFetchDataTicket()

  if (!ticket) {
    return null
  }

  const ticketArray = ticket

  const elementTicket = ticketArray.map(el => {
    const { price, segments } = el

    const [one, two] = segments

    const departureTimeFromOrigin = format(new Date(one.date), 'kk:m')
    const departureTimeFromDestination = format(new Date(two.date), 'kk:m')

    const travelTimeFromOrigin = format(addMinutes(new Date(one.date), one.duration), 'kk:m')
    const travelTimeFromDestination = format(addMinutes(new Date(two.date), two.duration), 'kk:m')

    const hoursInTransitFromOrigin = Math.floor(one.duration / 60)
    const minutesInTransitFromOrigin = one.duration % 60

    const hoursInTransitFromDestination = Math.floor(two.duration / 60)
    const minutesInTransitFromDestination = two.duration % 60

    const stopsFromFirstDeparture = one.stops.map(item => <p key={nanoid()}>{item}</p>)
    const numberOfStopsFromFirstDeparture = stopsFromFirstDeparture.length

    const stopsFromSecondDeparture = two.stops.map(item => <p key={nanoid()}>{item}</p>)
    const numberOfStopsFromSecondDeparture = stopsFromSecondDeparture.length

    return (
      <>
        <div className="ticketItem">
          <div className="price__logo">
            <p className="price">{price} р</p>
            <img src="" alt="" />
          </div>
          <div className="infoTicket">
            <div className="departure__arrival">
              <div className="departure">
                <p>
                  {one.origin} - {one.destination}
                </p>
                <p>
                  {departureTimeFromOrigin} -{travelTimeFromOrigin}
                </p>
              </div>
              <div className="arrival">
                <p>
                  {two.origin} - {two.destination}
                </p>
                <p>
                  {departureTimeFromDestination} - {travelTimeFromDestination}
                </p>
              </div>
            </div>
            <div className="from__to">
              <div className="onTheWayFrom">
                <p>в пути</p>
                <p>
                  {hoursInTransitFromOrigin}ч {minutesInTransitFromOrigin}м
                </p>
              </div>
              <div className="onTheWayTo">
                <p>в пути</p>
                <p>
                  {hoursInTransitFromDestination}ч {minutesInTransitFromDestination}м
                </p>
              </div>
            </div>
            <div className="transferFrom__transferTo">
              <div className="transferFrom">
                <p>{numberOfStopsFromFirstDeparture} пересадок</p>
                {stopsFromFirstDeparture}
              </div>
              <div className="transferTo">
                <p>{numberOfStopsFromSecondDeparture} пересадок</p>
                {stopsFromSecondDeparture}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })

  return (
    <div>
      <div key={nanoid()}>{elementTicket}</div>
      <button className="showMoreTicket">показать ещё 5 билетов!</button>
    </div>
  )
}

export default TicketList
