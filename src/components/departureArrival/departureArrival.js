import React from 'react'
import { addMinutes, format } from 'date-fns'

const DepartureArrival = ({ segments }) => {
  const [one, two] = segments

  const departureTimeFromOrigin = format(new Date(one.date), 'kk:mm')
  const departureTimeFromDestination = format(new Date(two.date), 'kk:mm')

  const travelTimeFromOrigin = format(addMinutes(new Date(one.date), one.duration), 'kk:mm')
  const travelTimeFromDestination = format(addMinutes(new Date(two.date), two.duration), 'kk:mm')
  return (
    <div className="departure__arrival">
      <div className="departure">
        <p>
          {one.origin} - {one.destination}
        </p>
        <p>
          {departureTimeFromOrigin} - {travelTimeFromOrigin}
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
  )
}

export default DepartureArrival
