import React from 'react'
import { nanoid } from 'nanoid'

const TransferFromTransferTo = ({ segments }) => {
  const [one, two] = segments

  const stopsFromFirstDeparture = one.stops.map(item => <p key={nanoid()}>{item}</p>)
  const numberOfStopsFromFirstDeparture = stopsFromFirstDeparture.length

  const stopsFromSecondDeparture = two.stops.map(item => <p key={nanoid()}>{item}</p>)
  const numberOfStopsFromSecondDeparture = stopsFromSecondDeparture.length
  return (
    <div className="transferFrom__transferTo">
      <div className="transferFrom">
        <p className="counterTransfer">{numberOfStopsFromFirstDeparture} пересадок</p>
        <div className="transfer">{stopsFromFirstDeparture}</div>
      </div>
      <div className="transferTo">
        <p className="counterTransfer">{numberOfStopsFromSecondDeparture} пересадок</p>
        <div className="transfer">{stopsFromSecondDeparture}</div>
      </div>
    </div>
  )
}

export default TransferFromTransferTo
