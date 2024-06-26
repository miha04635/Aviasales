import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { dataTicket, saveDataTicket } from '../components/actions/actions'

const useFetchDataTicket = () => {
  const dispatch = useDispatch()
  const useSearchId = useSelector(state => state.ticket.searchId)
  const stopFetching = useSelector(state => state.ticket.stop)

  const fetchSearchId = async () => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search')

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()

      return data
    } catch (error) {
      throw new Error('Error', error)
    }
  }

  const fetchTicketData = async searchId => {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await response.json()

      return data
    } catch (error) {
      throw new Error('Error')
    }
  }

  useEffect(() => {
    if (!useSearchId) {
      fetchSearchId().then(res => {
        if (res) {
          dispatch(dataTicket(res.searchId))
        }
      })
    }
  }, [dispatch, useSearchId])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (useSearchId && !stopFetching) {
        fetchTicketData(useSearchId).then(ticketData => {
          if (ticketData) {
            dispatch(saveDataTicket(ticketData.tickets, ticketData.stop))
          }
        })
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [dispatch, useSearchId, stopFetching])

  return null
}

export default useFetchDataTicket
