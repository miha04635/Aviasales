import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { dataTicket, saveDataTicket } from '../components/actions/actions'

const useFetchDataTicket = () => {
  const dispatch = useDispatch()
  const searchTicket = useSelector(state => state.ticket)
  const useSearchId = useSelector(state => state.ticket.searchId)

  const fetchSearchId = async () => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search')

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()

      return data
    } catch (error) {
      throw new Error('Failed to fetch data >>>>>>', error)
    }
  }

  const fetchTicketData = async () => {
    try {
      if (useSearchId) {
        const secondResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${useSearchId}`)
        if (!secondResponse.ok) {
          throw new Error('Failed to fetch data')
        }

        const secondData = await secondResponse.json()

        return secondData
      }
    } catch (error) {
      return undefined
    }
  }

  useEffect(() => {
    fetchSearchId().then(res => dispatch(dataTicket(res.searchId)))
  }, [])

  useEffect(() => {
    if (useSearchId) {
      fetchTicketData().then(ticket => {
        if (ticket && !ticket.stop) {
          dispatch(saveDataTicket(ticket.tickets))
        }
      })
    }
  }, [searchTicket])
}

export default useFetchDataTicket
