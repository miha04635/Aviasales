import React from 'react'

import useFetchDataTicket from '../../services/servicesTicket'
import TicketItem from '../ticketItem/ticketItem'

const TicketList = () => {
  // const click2 = id => {
  //   console.log(id)
  //   return fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error('Ошибка при выполнении запроса:', error))
  // }

  // const click = () => {
  //   return fetch('https://aviasales-test-api.kata.academy/search')
  //     .then(res => res.json())
  //     .then(({ searchId }) => {
  //       console.log(searchId)
  //       click2(searchId)
  //       return searchId
  //     })
  // }
  useFetchDataTicket()
  return <TicketItem />
}

export default TicketList
