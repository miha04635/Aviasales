import { TICKET_SORT_PRICE, TICKET_SORT_DURATION, TICKET_SORT_OPTIMAL } from '../actions/actions'

const initialState = {}

const ticketSortReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TICKET_SORT_PRICE:
      return {
        ...state,
        oneStops: action.payload,
      }
    case TICKET_SORT_DURATION:
      return {
        ...state,
        duration: action.payload,
      }

    case TICKET_SORT_OPTIMAL:
      return {
        ...state,
        optimal: action.payload,
      }
    default:
      return state
  }
}

export default ticketSortReducer
