import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { dataTicket, saveDataTicket, setError } from '../actions/actions'

const useFetchDataTicket = () => {
  const dispatch = useDispatch()
  const searchId = useSelector(state => state.tickets.searchId)
  const isFetchingStopped = useSelector(state => state.tickets.stop)

  const apiUrl = 'https://aviasales-test-api.kata.academy'

  const getSearchId = async () => {
    try {
      const response = await fetch(`${apiUrl}/search`)
      if (!response.ok) {
        throw new Error('Failed to fetch searchId')
      }
      const data = await response.json()
      return data
    } catch (error) {
      dispatch(setError('Error fetching searchId'))
    }
  }

  const getTickets = async Id => {
    try {
      const response = await fetch(`${apiUrl}/tickets?searchId=${searchId}`)
      if (!response.ok) {
        if (response.status === 500) {
          return null
        }
        throw new Error('Failed to fetch tickets')
      }
      const data = await response.json()
      return data
    } catch (error) {
      dispatch(setError('Error fetching tickets'))
    }
  }

  useEffect(() => {
    const initializeSearchId = async () => {
      if (!searchId) {
        const searchData = await getSearchId()

        if (searchData) {
          dispatch(dataTicket(searchData.searchId))
        }
      }
    }
    initializeSearchId()
  }, [dispatch, searchId])

  useEffect(() => {
    const handleTicketsFetch = async () => {
      if (searchId && !isFetchingStopped) {
        const ticketData = await getTickets(searchId)
        if (ticketData) {
          dispatch(saveDataTicket(ticketData.tickets, ticketData.stop))
          if (!ticketData.stop) {
            handleTicketsFetch()
          }
        } else {
          handleTicketsFetch()
        }
      }
    }
    handleTicketsFetch()
  }, [dispatch, searchId, isFetchingStopped])
}

export default useFetchDataTicket
