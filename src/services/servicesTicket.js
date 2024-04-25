import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { dataTicket, saveDataTicket } from '../components/actions/actions'

const useFetchDataTicket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://aviasales-test-api.kata.academy/search')

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        dispatch(dataTicket(data))

        if (data.searchId) {
          const secondResponse = await fetch(
            `https://aviasales-test-api.kata.academy/tickets?searchId=${data.searchId}`
          )
          if (!secondResponse.ok) {
            throw new Error('Ошибка второго запроса')
          }
          const secondData = await secondResponse.json()
          dispatch(saveDataTicket(secondData))
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [dispatch])
}

export default useFetchDataTicket
