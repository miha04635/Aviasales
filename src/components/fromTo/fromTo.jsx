import React from 'react'

const FromTo = ({ segments }) => {
  const [one, two] = segments

  const hoursInTransitFromOrigin = Math.floor(one.duration / 60)
  const minutesInTransitFromOrigin = one.duration % 60

  const hoursInTransitFromDestination = Math.floor(two.duration / 60)
  const minutesInTransitFromDestination = two.duration % 60
  return (
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
  )
}

export default FromTo
