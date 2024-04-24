import React from 'react'
import './ticketItem.scss'

const TicketItem = () => {
  return (
    <>
      <div className="ticketItem">
        <div className="price__logo">
          <p className="price">13 400 р</p>
          <img src="" alt="" />
        </div>
        <div className="infoTicket">
          <div className="departure__arrival">
            <div className="departure">
              <p>mow - hkt</p>
              <p>10:45 - 08:00</p>
            </div>
            <div className="arrival">
              <p>mow - hkt</p>
              <p>10:45 - 08:00</p>
            </div>
          </div>
          <div className="from__to">
            <div className="onTheWayFrom">
              <p>в пути</p>
              <p>21ч 15м</p>
            </div>
            <div className="onTheWayTo">
              <p>в пути</p>
              <p>13ч 30м</p>
            </div>
          </div>
          <div className="transferFrom__transferTo">
            <div className="transferFrom">
              <p>2 пересадки</p>
              <p>hkg, jnb</p>
            </div>
            <div className="transferTo">
              <p>1 пересадка</p>
              <p>hkg</p>
            </div>
          </div>
        </div>
      </div>
      <button className="showMoreTicket">показать ещё 5 билетов!</button>
    </>
  )
}

export default TicketItem
